import { NextFunction, Request, Response } from 'express'
import jwt, { JwtPayload } from 'jsonwebtoken'
import { USER_ROLE } from '../constants/users.constants'
import catchAsyncFunction from '../utils/catchAsync'
import config from '../config'
import User from '../models/user.model'

const checkAuth = (...roles: Array<keyof typeof USER_ROLE>) => {
  return catchAsyncFunction(
    async (req: Request, res: Response, next: NextFunction) => {
      const token = req.headers.authorization

      if (!token) {
        throw new Error('Invalid token!')
      }

      const decodedToken = jwt.verify(token, config.jwt_access_secret)
      console.log(decodedToken)

      const { email } = decodedToken as JwtPayload

      const user = await User.findOne({ email })

      //   //Authentication
      if (!user) {
        throw new Error('Invalid email or password')
      }

      //   //Authorization
      if (!roles.includes(user?.role)) {
        throw new Error('You are not authorized !')
      }
      next()
    },
  )
}

export default checkAuth
