import app from './app'

import mongoose from 'mongoose'

require('dotenv').config()

const port = 8080

mongoose
  .connect(process.env.DB_URL || '')
  .then(() => {
    app.listen(port, () => console.log(`Server is running on port: ${port}`))
  })
  .catch((e) => {
    console.log('failed connection to DB')
    process.exit(1)
  })
