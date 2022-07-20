
import Category from "../models/Category";
import { CustomError } from "../types/ErrorTypes";

const getAllCategories = async () => {
    return await Category.find()
}

const getSingleCategory = async (categoryId: string) => {
    try {
        const foundProduct = await Category.findById(categoryId)
        if (!foundProduct) {
            throw new CustomError(404, 'Product infomation not found')
        }
        return foundProduct
    } catch (e) {
        console.log(e)
        return
    }
}

const insertCategory = async (category : any) => {
    console.log("category :"+category)
    const productData = new Category({
        name: category.name, image: category.image
        
    })

 try{
    Category.create(productData)
 }catch(err)
 {
    console.log(err)
 }
      
  
        
}

const updateCategory = async (categoryId: string, category :any) => {
    const categoryData = new Category({
        category
    })
    const foundCategory = await Category.findById(categoryId)
    if (foundCategory) {
        return await Category.findByIdAndUpdate(categoryId, categoryData)
    } else {
        throw new CustomError(404, 'Product infomation not found')
    }
}

const deleteCategory = async (categoryId: string) => {
    const foundCategory = await Category.findById(categoryId)
    if (foundCategory) {
        return await Category.findByIdAndDelete(categoryId)
    } else {
        throw new CustomError(404, 'Product infomation not found')
    }
}

export default {
    getAllCategories,
    getSingleCategory,
    insertCategory,
    updateCategory,
    deleteCategory
}