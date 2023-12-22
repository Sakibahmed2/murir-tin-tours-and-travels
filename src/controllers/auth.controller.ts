/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express'

const register = async (req: Request, res: Response, next: NextFunction) => {}

const login = async (req: Request, res: Response) => {}

export const authController = {
  register,
  login,
}
