import { ObjectId } from "mongoose"

export interface Product{
    productId: string
    title: string,
    description?: string,
    discount?: number,
    price: number,
    quantity: number,
    categoryId: ObjectId,
    images:string[]
}