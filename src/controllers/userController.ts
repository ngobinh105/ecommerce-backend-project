import { Request, Response, NextFunction } from 'express'
import fs from 'fs'

import User, { UserRole } from '../models/User'
import Image from '../models/Image'
import { CustomError } from '../types/ErrorTypes'

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
    const { firstName, lastName, email, password } = req.body

    const user = new User({
      firstName,
      lastName,
      email,
      password,
      avatar,
      role,
    })

    const newUser = await user.save()
    savedImage.userId = newUser._id
    savedImage.save()
    return res.status(201).json(newUser)
  } else {
    throw new CustomError(404, 'File cannot be empty')
  }
}

export default { createUser }
