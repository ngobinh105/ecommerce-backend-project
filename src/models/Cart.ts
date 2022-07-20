import mongoose from 'mongoose'

import { ProductType } from 'ProductType'
import Product from './Product'
const { Schema } = mongoose



const cartSchema = new Schema({
  products: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  itemQuantity: {
    type: Number,
  },
  cartPrice: {
    type: Number,
  },
})

const CartModel = mongoose.model('Cart', cartSchema)

export default CartModel
