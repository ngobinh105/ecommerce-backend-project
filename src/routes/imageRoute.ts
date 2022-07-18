import { CustomError } from '../types/ErrorTypes'
import { Router, Request, Response } from 'express'

import Image from '../models/Image'

const imageRoute = Router()
imageRoute.get('/:imageId', async (req: Request, res: Response) => {
  try {
    const { imageId } = req.params
    const image = await Image.findById(imageId)
    res.end(image?.data, 'binary')
  } catch (error) {
    throw new CustomError(404, 'Images not found')
  }
})
export default imageRoute
