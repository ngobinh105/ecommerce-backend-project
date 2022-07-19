
import { ObjectId } from "mongoose"

import Product, { ProductDocument } from "../models/Product";
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
        return 0
    }
}

const insertProduct = async (product : ProductDocument) => {
    if (product) {
        return await product.save()
    } else {
        throw new CustomError(404, 'Product infomation not found')
    }
}

const updateProduct = async (productId: string, product : any) => {
    const foundProduct : any = await Product.findById(productId)
    if (foundProduct) {
        return await await Product.findById(productId).updateOne({}, product);
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