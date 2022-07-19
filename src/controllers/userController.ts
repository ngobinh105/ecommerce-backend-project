import { Request, Response, NextFunction } from 'express'
import fs from 'fs'
import jwt from 'jsonwebtoken'
require('dotenv').config()

import User, { UserRole } from '../models/User'
import Image from '../models/Image'
import { CustomError } from '../types/ErrorTypes'
import userService from '../services/userService'

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  if (req.file?.path) {
    const data = fs.readFileSync(req.file?.path)
    console.log(data)
    const newImage = new Image({
      data,
    })
    const savedImage = await newImage.save()
    const avatar = `http://localhost:8080/images/${savedImage._id}`
    const role: UserRole = 'customer'
    const { firstName, lastName, email, password, phone } = req.body

    const user = new User({
      firstName,
      lastName,
      email,
      password,
      avatar,
      role,
      phone,
    })

    const newUser = await user.save()
    savedImage.userId = newUser._id
    savedImage.save()
    return res.status(201).json(newUser)
  } else {
    throw new CustomError(404, 'File cannot be empty')
  }
}

const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userId } = req.params
    await userService.deleteUser(userId)
    return res.status(204)
  } catch (error) {
    if (error instanceof CustomError) {
      return next(error)
    } else {
      console.log(error)
    }
  }
}

const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await userService.getAllUsers()
    return res.status(200).json(users)
  } catch (e) {
    if (e instanceof CustomError) {
      return next(e)
    } else {
      console.log(e)
    }
  }
}

const getSingleUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userId } = req.params
    const user = await userService.getSingleUser(userId)
    return res.status(200).json(user)
  } catch (e) {
    if (e instanceof CustomError) {
      return next(e)
    } else {
      console.log(e)
    }
  }
}

const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userId } = req.params
    const updatedUser = await userService.updateUser(userId, req.body)
    return res.status(200).json(updatedUser)
  } catch (e) {
    if (e instanceof CustomError) {
      return next(e)
    } else {
      console.log(e)
    }
  }
}

const userLogin = async (req: Request, res: Response) => {
  const user = req.body
  const token = jwt.sign(
    user.toJSON(),
    process.env.JWT_SECRETKEY ? process.env.JWT_SECRETKEY : '',
    { expiresIn: '3h' }
  )
  return res.send(token)
}

const verifyUserToken = (req: Request, res: Response) => {
  const { authorization } = req.headers
  const token = authorization ? authorization.split(' ')[1] : ''
  if (token) {
    try {
      const decoded = jwt.verify(
        token,
        process.env.JWT_SECRETKEY ? process.env.JWT_SECRETKEY : ''
      )
      return res.json(decoded)
    } catch (e) {
      throw new CustomError(401, 'Invalid Token or Expired Token')
    }
  } else {
    throw new CustomError(404, 'Token is not provided')
  }
}
export default {
  createUser,
  deleteUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  userLogin,
  verifyUserToken,
}
