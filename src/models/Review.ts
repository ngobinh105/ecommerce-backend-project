import mongoose from 'mongoose'
import { ProductType } from 'ProductType'
import { UserType } from 'UserType'
const { Schema } = mongoose

export class Review{

    constructor( public product: ProductType, public user:UserType,public review:String,public image:String){


    }

}
const reviewSchema = new Schema({
  product: { type: Schema.Types.ObjectId, ref: 'Product' },
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  review: String,
  image: String,
})

const ReviewModel = mongoose.model('Review',  new mongoose.Schema({
    reviewSchema
}))

export default ReviewModel
