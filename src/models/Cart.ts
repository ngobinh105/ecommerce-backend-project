import mongoose from 'mongoose'
const { Schema } = mongoose

const cartSchema = new Schema({
  product: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  quantity: String,
})

const Cart = mongoose.model('Cart', cartSchema)

export default Cart
