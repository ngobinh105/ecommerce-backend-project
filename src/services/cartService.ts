import CartModel from '../models/Cart'
import { CustomError } from '../types/ErrorTypes'
import User from '../models/User'

const getAllCarts = async () => {
  return await CartModel.find().then((carts) => {
    return carts
  })
}

const createCart = async (userID: any) => {
  const foundUserID = await User.findOne({
    id: userID,
  })
  if (foundUserID) {
    let newcart = await CartModel.create({
      products: [],
      user: foundUserID,
      itemQuantity: 0,
      cartPrice: 0,
    })
    return newcart
  } else {
    return 'user not found'
  }
}

const getSingleCart = async (userID: string) => {
  let result: any
  const foundUserID = await User.findOne({
    id: userID,
  })
  try {
    if (foundUserID?._id) {
      const foundCart = CartModel.findOne({ user: foundUserID._id })

      return foundCart
        .then((res) => {
          return res
        })
        .catch((err) => {
          return err
        })
    } else {
      result = new CustomError(500, 'User not found')
    }
  } catch (err) {
    result = err
  }
  return result
}

const insertProductToCart = async (product: any, id: string) => {
  try {
    let cart = await CartModel.findOne({ id })
    if (cart?.user != null) {
      let itemIndex = cart.products.findIndex(
        (p: any) => String(p._id) === String(product._id)
      )
      if (itemIndex > -1) {
        //increase the quantity of product
        //icrease the total price of the cart
        let productItem: any = cart.products[itemIndex]
        productItem.quantity += product.quantity
        cart.products[itemIndex] = productItem
        cart.itemQuantity += product.quantity
        cart.cartPrice! += product.price * product.quantity
      }
      cart.save()
    } else {
      //product does not exists in cart, add new item\
      let cartModel = new CartModel()
      cartModel.products.push(product)
      const user = await User.findOne({
        id: id,
      })
      cartModel.user = user?._id
      const calculateTotalCart = cartModel.populate('products').then((p) => {
        return p.products.reduce((sum: any, obj: any) => {
          cartModel.itemQuantity = obj.quantity
          cartModel.cartPrice = obj.price * obj.quantity
          cartModel.save()
          return sum
        }, 0)
      })
    }
  } catch (err) {
    console.log(err)
  }
}
export default {
  createCart,
  getAllCarts,
  insertProductToCart,
  getSingleCart,
}
