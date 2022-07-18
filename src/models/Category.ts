import mongoose from 'mongoose'
const { Schema } = mongoose

export class Category{

    constructor( public name: String, public image:String){}
      
    

}
const categorySchema = new Schema({
  name: String,
  image: String,
})

const CategoryModel = mongoose.model('Category', new mongoose.Schema({
    categorySchema
}))

export default CategoryModel
