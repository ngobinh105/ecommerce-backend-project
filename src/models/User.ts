
import mongoose, { Document, Schema } from 'mongoose'

export type UserRole = 'customer' | 'admin'
export interface UserDocument extends Document {
  firstName: string
  lastName: string
  email: string
  password: string
  role: UserRole
  avatar: string
}

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['customer', 'admin'],
  },
  avatar: {
    type: String,
  },
})

const User = mongoose.model<UserDocument>('User', userSchema) 

export default User
