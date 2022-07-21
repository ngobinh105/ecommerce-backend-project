import { Router, Request, Response, NextFunction, response } from "express";
import { cartCalculation } from "../middlewares/cartMiddlewares";
import cartController from "../controllers/cartController"
const cartRouter = Router()

cartRouter.get('/getcarts',cartCalculation, cartController.getAllCarts )

cartRouter.post('/createcart/:userId', cartController.createCart )

cartRouter.get('/getcart/:userId', cartController.getUserCart )

cartRouter.get('/insert/:productId', cartController.insertProductToCart )

export default cartRouter