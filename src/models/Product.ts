import mongoose, { ObjectId, Schema, Document } from "mongoose";

export interface ProductDocument extends Document {
  title: string,
  description: string,
  discount: number,
  price: number,
  quantity: number,
  categoryId: ObjectId,
  images: string[],
}

const Users_infoSchema = new Schema({
  title: { type: String, maxlength: 60, required: true },
  description: { type: String, maxlength: 200 },
  discount: { type: Number, min: 0, max: 100 },
  price: { type: Number, min: 0, max: 1000 },
  quantity: { type: Number, min: 0, max: 1000 },
  categoryId:  Schema.Types.ObjectId, ref: 'Category',
  images: [{ type: String, maxlength: 100, required: true }],
  // status: {type: Number, required: true} if we suspend the product
});
//Export Product model , products will be appear in mogodb
const Product = mongoose.model<ProductDocument>("Product", Users_infoSchema);
export default Product