/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express'
import { reviewServices } from '../services/review.service'

const createReview = async (req: Request, res: Response) => {
  try {
    const review = req.body
    const result = await reviewServices.createReview(review)

    res.status(201).json({
      status: 'success',
      message: 'review created successfully',
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

const getAllReviews = async (req: Request, res: Response) => {
  try {
    const result = await reviewServices.getAllReviews()

    res.status(200).json({
      status: 'success',
      message: 'Reviews fetched successfully',
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

const getSingleReview = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const result = await reviewServices.getSingleReview(id)

    res.status(200).json({
      status: 'success',
      message: 'Single review fetched successfully',
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

const updateReview = async (req: Request, res: Response) => {
  try {
    const review = req.body
    const { id } = req.params
    const result = await reviewServices.updateReview(id, review)

    res.status(200).json({
      status: 'success',
      message: 'Review updated successfully',
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

const deleteReview = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    await reviewServices.deleteReview(id)

    res.status(200).json({
      status: 'success',
      message: 'Review deleted successfully',
    })
  } catch (err: any) {
    console.log(err)
    res.status(500).json({
      status: 'fail',
      message: err.message || 'Something went wrong',
    })
  }
}

export const reviewController = {
  createReview,
  getAllReviews,
  getSingleReview,
  updateReview,
  deleteReview,
}
