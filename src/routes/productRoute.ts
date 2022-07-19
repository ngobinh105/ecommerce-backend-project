import { Router, Request, Response, NextFunction, response } from "express";
import productController from "../controllers/productController"
const productRouter = Router()

productRouter.get('', productController.getAllProducts )

productRouter.post('', productController.createProduct )

productRouter.get('/:productId', productController.getSingleProduct )

productRouter.put('/:productId', productController.updateProduct )

productRouter.delete('/:productId', productController.deleteProduct )

export default productRouter