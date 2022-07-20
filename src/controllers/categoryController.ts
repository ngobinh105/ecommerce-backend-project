import { Request, Response } from "express"
import Category from "../models/Category"
import categoryService from "../services/categoryService"
const getAllCategories = async (req :Request, res: Response)=>{
    const categories = await categoryService.getAllCategories()
    return res.json(categories)
}

const getSingleCategory = async (req :Request, res: Response)=>{
    const { categoryId } = req.params
    const category = await categoryService.getSingleCategory(categoryId)
    return res.json(category)
}

const   createCategory = async (req :Request, res: Response)=>{
    const  category  = req.body
    const productCreate = await categoryService.insertCategory(category)
    return res.json(productCreate)
}

const updatecategory = async (req :Request, res: Response)=>{
    const { categoryId } = req.params
    const { category } = req.body
    const categoryUpdate = await categoryService.updateCategory(categoryId, category)
    return res.json(categoryUpdate)
}

const deleteCategory = async (req :Request, res: Response)=>{
    const { categoryId } = req.params
    const category = await categoryService.deleteCategory(categoryId)
    return res.json(category)
}

export default {
    getAllCategories,
    getSingleCategory,
    createCategory,
    updatecategory,
    deleteCategory
}