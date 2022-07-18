import mongoose from 'mongoose'
const { Schema } = mongoose

const productSchema = new Schema({
  title: String,
  price: Number,
  description: String,
  discount: Number,
  quantity: Number,
  images: [String],
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
})

const Product = mongoose.model('Product', productSchema)

export default Product
