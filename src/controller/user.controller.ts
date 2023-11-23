/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express'
import { userServices } from '../services/user.service'

const createUser = async (req: Request, res: Response) => {
  try {
    const user = req.body
    const result = await userServices.createUser(user)

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

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await userServices.getAllUsers()

    res.status(200).json({
      status: 'success',
      message: 'Users fetched successfully',
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

const getSingleUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const result = await userServices.getSingleUser(id)

    res.status(200).json({
      status: 'success',
      message: 'Single user fetched successfully',
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

const updateUser = async (req: Request, res: Response) => {
  try {
    const user = req.body
    const { id } = req.params
    const result = await userServices.updateUser(id, user)

    res.status(200).json({
      status: 'success',
      message: 'User updated successfully',
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

const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    await userServices.deleteUser(id)

    res.status(200).json({
      status: 'success',
      message: 'User deleted successfully',
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
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
}
