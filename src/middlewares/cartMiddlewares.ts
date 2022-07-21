import { Request, Response, NextFunction } from 'express'
import cartService from '../services/cartService'

export const cartCalculation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const carts = await cartService.getAllCarts()
  carts.forEach((cart) => {
    cart.products.forEach((prod: any) => {
      console.log(prod.populate())
    })
  })
  req.body = carts
  next()
}
