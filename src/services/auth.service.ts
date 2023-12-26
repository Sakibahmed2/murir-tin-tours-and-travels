import config from '../config'
import { IUser } from '../interfaces/user.interface'
import User from '../models/user.model'
import jwt, { JwtPayload } from 'jsonwebtoken'

interface IRegister
  extends Omit<IUser, 'userStatus' | 'role' | 'passwordChangeAt'> {}

const register = async (payload: IRegister) => {
  const result = await User.create({
    ...payload,
    userStatus: 'active',
    role: 'user',
  })
  return result
}

interface ILogin {
  email: string
  password: string
}

const login = async (payload: ILogin) => {
  //check if user exists
  const user = await User.findOne(payload)

  if (!user) {
    throw new Error('Invalid credentials')
  }

  //jwt setup

  const jwtPayload: JwtPayload = {
    email: user.email,
    role: user.role,
  }

  const accessToken = jwt.sign(jwtPayload, config.jwt_access_secret, {
    expiresIn: config.jwt_access_expires_id,
  })

  return {
    accessToken,
  }
}

export const authServices = {
  register,
  login,
}
