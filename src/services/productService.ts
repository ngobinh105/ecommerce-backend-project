

import ProductModel from "../models/Product";

import { ObjectId } from "mongoose"

import Product, { ProductDocument } from "../models/Product";

import { CustomError } from "../types/ErrorTypes";

const getAllProduct = async () => {
    return await ProductModel.find()
}

const getSingleProduct = async (productId: string) => {
    let product=null;
    try {
        const foundProduct = await ProductModel.findOne({
            productId:productId
        })
        if (!foundProduct) {
            throw new CustomError(404, 'Product infomation not found')
        }else{
     
            product= foundProduct
        }
        
    } catch (e) {
        console.log(e)

    }
    return product;
}


const insertProduct = async (product : any) => {
    const productData = new ProductModel({
        title: product.title,
        description: product.description,
        discount: product.discount,
        price: product.price,
        quantity: product.quantity,
        categoryId: product.categoryId,
        images: product.images,
    })
 try{
    ProductModel.create(productData)
 }catch(err)
 {
    console.log(err)
 }
      
  
        
}

const updateProduct = async (productId: string, product :any) => {
    const productData = new ProductModel({
        product
    })
    const foundProduct = await ProductModel.findById(productId)
    if (foundProduct) {
        return await ProductModel.findByIdAndUpdate(productId, productData)

    } else {
        throw new CustomError(404, 'Product infomation not found')
    }
}

const deleteProduct = async (productId: string) => {
    const foundProduct = await ProductModel.findById(productId)
    if (foundProduct) {
        return await ProductModel.findByIdAndDelete(productId)
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