import mongoose from 'mongoose'
const { Schema } = mongoose

const userSchema = new Schema({
  userName: String,
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  role: String,
  avatar: String,
})

const User = mongoose.model('User', userSchema)

export default User
