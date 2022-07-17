export interface Product{
    productId: String
    title: String,
    description?: String,
    discount?: Number,
    price: Number,
    quantity: Number,
    categoryId: Number,
    images:String[]
}