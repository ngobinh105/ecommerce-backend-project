import mongoose from 'mongoose'
import { MongoMemoryServer } from 'mongodb-memory-server'
require('dotenv').config()

let mongod: any = null

export const connectDB = async () => {
  try {
    mongod = await MongoMemoryServer.create()
    const dbUrl = mongod.getUri()
    const conn = await mongoose.connect(dbUrl)
    console.log(`MongoDB connected: ${conn.connection.host}`)
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
}

export const dropDB = async () => {
  try {
    await mongoose.connection.close()
    if (mongod) {
      await mongod.stop()
    }
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
}
export const dropCollections = async () => {
  const collections = await mongoose.connection.db.collections()
  for (let collection of collections) {
    await collection.drop()
  }
}
