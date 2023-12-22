import { NextFunction, Request, Response } from 'express'
import catchAsyncFunction from '../utils/catchAsync'
import { USER_ROLE } from '../constants/users.constants'

const checkAuth = (...roles: Array<keyof typeof USER_ROLE>) => {
  console.log(roles)
  return catchAsyncFunction(
    async (req: Request, res: Response, next: NextFunction) => {
      //   const { email } = req.body
      //   const { password } = req.body

      //   const user = await User.findOne({ email, password })

      //   //Authentication
      //   if (!user) {
      //     throw new Error('Invalid email or password')
      //   }

      //   //Authorization
      //   if (!roles.includes(user?.role)) {
      //     throw new Error('You are not authorized !')
      //   }
      next()
    },
  )
}

export default checkAuth
