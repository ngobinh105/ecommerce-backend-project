export interface Product{
    productId: number
    title: String,
    description?: String,
    discount?: number,
    price: number,
    quantity: number,
    categoryId: number,
    images:String[]
}