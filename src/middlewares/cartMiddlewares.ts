import { CustomError } from 'ErrorTypes'
import { Request, Response, NextFunction } from 'express'
import cartService from '../services/cartService'


export const cartCalculation = async(req: Request, res: Response, next: NextFunction) => {
   console.log("middleware")
    const carts = await cartService.getAllCarts()
carts.forEach((cart)=>{
   cart.products.forEach((prod:any)=>{
    console.log(prod.populate())
   })
})
req.body=carts;
  next()
    // const user = { username, password }
    // console.log(user)
    // if (username === 'alia' && password === '123') {
    //     next()
    // } else {
    //     throw new CustomError(401, 'Login credential is not right')
    // }
}
