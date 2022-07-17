import { Request, Response } from "express"

const getAllProducts = (req :Request, res: Response)=>{
    console.log("getAllProducts");
    return res.send("Response from Prodct Controller")
}

const getSingleProduct = (req :Request, res: Response)=>{
    console.log("getSingleProduct");
    return res.send("Response from sigle Prodct Controller")
}

const createProduct = (req :Request, res: Response)=>{
    console.log("createProduct");
    return res.send("Response from create Prodct Controller")
}

const updateProduct = (req :Request, res: Response)=>{
    console.log("updateProduct");
    return res.send("Response from update Prodct Controller")
}

const deleteProduct = (req :Request, res: Response)=>{
    console.log("deleteProduct");
    return res.send("Response from delete Prodct Controller")
}

export default {
    getAllProducts,
    getSingleProduct,
    createProduct,
    updateProduct,
    deleteProduct
}