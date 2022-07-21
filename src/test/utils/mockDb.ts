import mongoose, { ConnectOptions } from 'mongoose'
import { MongoMemoryServer } from 'mongodb-memory-server'

const mongoServer = new MongoMemoryServer()

export const connectDB = async () => {
  const uri = mongoServer.getUri()
  const mongooseOpts = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }
  await mongoose.connect(uri, mongooseOpts as ConnectOptions)
}

export const dropDB = async () => {
  await mongoose.connection.dropDatabase()
  await mongoose.connection.close()
  await mongoServer.stop()
}
export const dropCollections = async () => {
  const collections = await mongoose.connection.db.collections()
  for (let collection of collections) {
    await collection.drop()
  }
}
