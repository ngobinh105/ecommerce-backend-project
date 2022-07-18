
import Product from "../models/Product";
import { CustomError } from "../types/ErrorTypes";

const getAllProduct = async () => {
    return await Product.find()
}

const getSingleProduct = async (productId: string) => {
    try {
        const foundUser = await Product.findById(productId)
        if (!foundUser) {
            throw new CustomError(404, 'Product infomation not found')
        }
        return foundUser
    } catch (e) {
        console.log(e)
        return
    }
}

const insertProduct = async (userId: string) => {
    //db.users.delete

    const foundUser = await Product.findById(userId)
    if (foundUser) {
        return await Product.findByIdAndDelete(userId)
    } else {
        throw new CustomError(404, 'Product infomation not found')
    }
}

const updateProduct = async (userId: string, product : Product) => {
    //db.users.delete

    const foundUser = await Product.findById(userId)
    if (foundUser) {
        return await Product.findByIdAndUpdate(userId, product)
    } else {
        throw new CustomError(404, 'Product infomation not found')
    }
}

const deleteProduct = async (productId: string) => {
    //db.users.delete

    const foundUser = await Product.findById(productId)
    if (foundUser) {
        return await Product.findByIdAndDelete(productId)
    } else {
        throw new CustomError(404, 'Product infomation not found')
    }
}

export default {
    getAllProduct,
    getSingleProduct,
    deleteProduct
}