import { NextFunction, Request, Response } from 'express'

import { CustomError } from '../types/ErrorTypes'

export const errorHandler = (
  err: Error | CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    return res.status(err.status).json(err)
  } else {
    return res.status(500).send(err.message)
  }
}
