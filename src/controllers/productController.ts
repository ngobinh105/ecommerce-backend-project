import { Request, Response } from "express"
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
    console.log(product)
    const productCreate = await productService.insertProduct(product)
    return res.json(productCreate)
}

const updateProduct = async (req :Request, res: Response)=>{
    const { productId } = req.params
    const { product } = req.body
    const productUpdate = await productService.updateProduct(productId, product)
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