import app from './app'

import mongoose from 'mongoose'

require('dotenv').config()

const port = 8080

mongoose
  .connect(process.env.DB_URL || 'mongodb://127.0.0.1:27017/test?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.5.1')
  .then(() => {
    app.listen(port, () => console.log(`Server is running on port: ${port}`))
  })
  .catch((e) => {
    console.log('failed connection to DB')
    process.exit(1)
  })
