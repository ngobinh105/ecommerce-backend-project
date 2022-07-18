import { Router, Request, Response, NextFunction, response } from "express";
import productController from "../controllers/productController"
const productRouter = Router()

productRouter.get('', productController.getAllProducts )

productRouter.get(':productId', productController.getSingleProduct )

productRouter.post('', productController.createProduct )

productRouter.put('', productController.updateProduct )

productRouter.delete('', productController.deleteProduct )

export default productRouter