/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express'
import User from '../models/user.model'

const createUser = async (req: Request, res: Response) => {
  try {
    const user = req.body
    const result = await User.create(user)

    res.status(201).json({
      status: 'success',
      message: 'user created successfully',
      data: result,
    })
  } catch (err: any) {
    console.log(err)
    res.status(500).json({
      status: 'fail',
      message: err.message || 'Something went wrong',
    })
  }
}

export const userController = {
  createUser,
}
