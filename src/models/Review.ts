import mongoose from 'mongoose'
const { Schema } = mongoose

const reviewSchema = new Schema({
  product: { type: Schema.Types.ObjectId, ref: 'Product' },
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  review: String,
  image: String,
})

const Review = mongoose.model('Review', reviewSchema)

export default Review
