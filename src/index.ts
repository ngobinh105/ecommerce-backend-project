import app from './app'

import mongoose from 'mongoose'
import CartModel, { Cart } from './models/Cart'

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

 
//   var document = new CartModel({
//     lines:[],
//     itemCount:0,
//     CartPrice:0
//  });
//  document.save((e)=>{
//  if(e) console.log(e);
//  // document created in the models collection in database
//  });