import { Router, Request, Response, NextFunction, response } from "express";
import categoryController from "../controllers/categoryController"
const categoryRouter = Router()

categoryRouter.get('/getCategories', categoryController.getAllCategories )

categoryRouter.post('/createcategory', categoryController.createCategory )

categoryRouter.get('/getcategory/:categoryId', categoryController.getSingleCategory )

categoryRouter.get('/delete/:categoyId', categoryController.deleteCategory )

categoryRouter.get('/update/:categoyId', categoryController.updatecategory )

export default categoryRouter