import { Router, Request, Response, NextFunction, response } from "express";
import cartController from "../controllers/cartController"
const cartRouter = Router()

cartRouter.get('/getcarts', cartController.getAllCarts )

cartRouter.post('/createcart/:userId', cartController.createCart )

cartRouter.get('/getcart/:userId', cartController.getUserCart )

cartRouter.get('/insert/:productId', cartController.insertProductToCart )

export default cartRouter