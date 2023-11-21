import express, { Application, Request, Response } from 'express'
import { userRoute } from './routes/user.route'
import cors from 'cors'

const app: Application = express()

//parser
app.use(express.json())
app.use(cors())

app.use('/api/v1/users', userRoute)

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'Success',
    message: 'Welcome to murir tin tours & travels',
  })
})

export default app
