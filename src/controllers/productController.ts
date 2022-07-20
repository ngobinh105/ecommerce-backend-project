import { Request, Response } from "express"
import Product from "../models/Product"
import productService from "../services/productService"
const getAllProducts = async (req :Request, res: Response)=>{
    const products = await productService.getAllProduct()
    return res.json(products)
}

const getSingleProduct = async (req :Request, res: Response)=>{
    const { productId } = req.params
    const product = await productService.getSingleProduct(productId)
    return res.json(product)
}

const createProduct = async (req :Request, res: Response)=>{

    const product  = req.body

    const { title,description,discount, price, quantity, categoryId , images} = req.body
    const product = new Product({
        title,description,discount, price, quantity, categoryId, images,
    })

    console.log(product)
    const productCreate = await productService.insertProduct(product)
    return res.json(productCreate)
}

const updateProduct = async (req :Request, res: Response)=>{
    const { productId } = req.params
    const { title,description,discount, price, quantity, categoryId , images} = req.body
    const productUpdate = await productService.updateProduct(productId, { title,description,discount, price, quantity, categoryId , images})
    return res.json(productUpdate)
}


const deleteProduct = async (req :Request, res: Response)=>{
    const { productId } = req.params
    const product = await productService.deleteProduct(productId)
    return res.json(product)
}

export default {
    getAllProducts,
    getSingleProduct,
    createProduct,
    updateProduct,
    deleteProduct
}