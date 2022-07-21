import { NextFunction, Request, Response } from "express"
import { Product } from "Product"
import cartService from "../services/cartService"
import productService from "../services/productService"

const getAllCarts = async (req :Request, res: Response,next: NextFunction)=>{
    
 
    
    return res.json(req.body)
}

const getUserCart = async (req :Request, res: Response)=>{
  
    const { userId } = req.params
 
    const cart = await cartService.getSingleCart(userId)
    if(cart==undefined)
    {
        return res.json("Cart not found") 
    }else{
        return res.json(cart)
    }
    
}

const createCart = async (req :Request, res: Response)=>{
    const user  =req.params.userId
    const productCreate = await cartService.createCart(user)
    return res.json(productCreate)
}

const insertProductToCart = async (req :Request, res: Response)=>{
    let productInsert:any = null
    const { productId } = req.params
    const {userId} = req.body

    const product = productService.getSingleProduct(productId)
   product.then((prod)=>{
    cartService.insertProductToCart(prod,userId)
    
    res.json(prod)
   }
  

   )
   .catch((err)=>res.json(err))

}


export default {
    getAllCarts,
    getUserCart,
    createCart,
    insertProductToCart
 
}