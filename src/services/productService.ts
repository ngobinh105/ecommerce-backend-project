
import Product from "../models/Product";
import { CustomError } from "../types/ErrorTypes";

const getAllProduct = async () => {
    return await Product.find()
}

const getSingleProduct = async (productId: string) => {
    try {
        const foundProduct = await Product.findById(productId)
        if (!foundProduct) {
            throw new CustomError(404, 'Product infomation not found')
        }
        return foundProduct
    } catch (e) {
        console.log(e)
        return
    }
}

const insertProduct = async (product : any) => {
    const productData = new Product({
        product
    })
    if (product) {
        return await Product.insertMany([product])
    } else {
        throw new CustomError(404, 'Product infomation not found')
    }
}

const updateProduct = async (productId: string, product :any) => {
    const productData = new Product({
        product
    })
    const foundProduct = await Product.findById(productId)
    if (foundProduct) {
        return await Product.findByIdAndUpdate(productId, productData)
    } else {
        throw new CustomError(404, 'Product infomation not found')
    }
}

const deleteProduct = async (productId: string) => {
    const foundProduct = await Product.findById(productId)
    if (foundProduct) {
        return await Product.findByIdAndDelete(productId)
    } else {
        throw new CustomError(404, 'Product infomation not found')
    }
}

export default {
    getAllProduct,
    getSingleProduct,
    insertProduct,
    updateProduct,
    deleteProduct
}