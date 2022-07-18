import { NextFunction, Request, Response } from 'express'

import { CustomError } from '../types/ErrorTypes'

export const errorHandler = (
  err: Error | CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    console.log('does it go here')
    res.json(err)
  } else {
    res.send(err.message)
  }
}