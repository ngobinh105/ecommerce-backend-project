import mongoose, { Document, ObjectId, Schema } from 'mongoose'

export interface ImageDocument extends Document {
  data: Buffer
}

const imageSchema = new Schema({
  data: {
    type: Buffer,
    unique: true,
  },
})

const Image = mongoose.model<ImageDocument>('Image', imageSchema)
export default Image
