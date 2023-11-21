import express from 'express'
import { userController } from '../controller/user.controller'

const router = express.Router()

router.post('/create-user', userController.createUser)

export const userRoute = router