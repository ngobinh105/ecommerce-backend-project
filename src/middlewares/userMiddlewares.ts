import { CustomError } from '../types/ErrorTypes'
import { Request, Response, NextFunction } from 'express'

import User from '../models/User'

export const verifyUserLogin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, password } = req.body
  const foundUser = await User.findOne({ email })
  if (foundUser) {
    const checkPassword = await foundUser.comparePassword(password)
    if (checkPassword) {
      req.user = foundUser
      next()
    } else {
      throw new CustomError(401, 'User credentials are wrong')
    }
  } else {
    throw new CustomError(404, 'User Not Found')
  }
}

export const verifyAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = req.user
  if (user?.role === 'admin') {
    next()
  } else {
    next(new CustomError(401, 'user are not allowed to view this'))
  }
}
