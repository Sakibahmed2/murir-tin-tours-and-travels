import express, { Application, Request, Response } from 'express'
const app: Application = express()

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'Success',
    message: 'Welcome to murir tin tours & travels',
  })
})

export default app
