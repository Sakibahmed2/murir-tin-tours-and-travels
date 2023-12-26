/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express'
import { authServices } from '../services/auth.service'
import catchAsyncFunction from '../utils/catchAsync'
import sendSuccessResponse from '../utils/sendResponse'

const register = catchAsyncFunction(async (req: Request, res: Response) => {
  const result = await authServices.register(req.body)

  sendSuccessResponse(res, {
    statusCode: 201,
    message: 'User created successfully',
    data: result,
  })
})

const login = catchAsyncFunction(async (req: Request, res: Response) => {
  const result = await authServices.login(req.body)

  sendSuccessResponse(res, {
    statusCode: 201,
    message: 'User login successfully',
    data: result,
  })
})

export const authController = {
  register,
  login,
}
