import express, { Application, Request, Response } from 'express'
import { userRoute } from './routes/user.route'
import cors from 'cors'
import { tourRoute } from './routes/tour.route'
import { reviewRoute } from './routes/review.route'

const app: Application = express()

//parser
app.use(express.json())
app.use(cors())

app.use('/api/v1/users', userRoute)

app.use('/api/v1/tours', tourRoute)

app.use('/api/v1/reviews', reviewRoute)

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'Success',
    message: 'Welcome to murir tin tours & travels',
  })
})

export default app
