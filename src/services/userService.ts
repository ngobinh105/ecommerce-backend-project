import User, { UserDocument } from '../models/User'
import { CustomError } from '../types/ErrorTypes'

const getAllUsers = async () => {
  return await User.find({})
}

const getSingleUser = async (userId: string) => {
  try {
    const user = await User.findById(userId)
    console.log('user', user)
    if (!user) {
      throw new CustomError(404, 'User not found')
    }
    return user
  } catch (error) {
    console.log(error)
    return
  }
}

const deleteUser = async (userId: string) => {
  const user = await User.findById(userId)
  if (user) {
    return await User.findByIdAndDelete(userId)
  } else {
    throw new CustomError(404, 'User not found')
  }
}
const updateUser = async (
  userId: string,
  updatedObject: Partial<UserDocument>
) => {
  const user = await User.findById(userId)
  if (user) {
    await User.findByIdAndUpdate(userId, updatedObject)
    const updatedUser = await User.findById(userId)
    return updatedUser
  } else {
    throw new CustomError(404, 'User not found')
  }
}

export default { getAllUsers, getSingleUser, deleteUser, updateUser }
