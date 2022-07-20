
import { nextTick } from "process";
import { UserType } from "../types/UserType";
import CartModel from "../models/Cart";
import { CustomError } from "../types/ErrorTypes";
import ProductModel from "../models/Product";
import User, { UserDocument } from '../models/User'
import { Cart } from '../types/Cart';
import { getSystemErrorMap } from "util";

const getAllCarts = async () => {

    return await CartModel.find().then((carts) => {
        return carts
    })
}

const createCart = async (userID: any) => {
    const foundUserID = await User.findOne({
        id: userID
    })
    if (foundUserID) {
        let newcart = await CartModel.create({
            products: [],
            user: foundUserID,
            itemQuantity: 0,
            cartPrice: 0
        })
        return newcart;
    } else {
        return "user not found"
    }

}
const getSingleCart = async (userID: string) => {
    let result: any;
    const foundUserID = await User.findOne({
        id: userID
    })
    try {
        if (foundUserID?._id) {
            const foundCart = CartModel.findOne({ user: foundUserID._id });

            return foundCart.then((res) => {
                return res
            })
                .catch((err) => {
                    return err
                })

        } else {
            result = new CustomError(500, "User not found");
        }


    } catch (err) {
        result = err;
    }

    return result;

}

const insertProductToCart = async (product: any, id: string) => {
    console.log(id+"To be inserted")
    try {
        let c = new Cart()
        let cart = await CartModel.findOne({ id });
        
        if (cart?.user!=null) {
    
            let itemIndex = cart.products.findIndex((p:any) =>
            String(p._id) === String(product._id));
            console.log("itemIndex "+itemIndex)
            if (itemIndex > -1) {
                //product exists in the cart, update the quantity
                let productItem:any = cart.products[itemIndex];
                console.log("productItem exists "+productItem)
                 productItem.quantity += 1;
                cart.products[itemIndex] = productItem;
                let quan:number = cart.itemQuantity!
                quan++;
                cart.itemQuantity= quan;

                cart.save()
            }
             else {
                //product does not exists in cart, add new item
                
                console.log("Pushing "+product)
                 cart.products.push(product );
                 let quan:number = cart.itemQuantity!
                 quan++;
                 cart.itemQuantity= quan;
                
              //recalculate

                cart.save()
            }
        }
    } catch (err) {
        console.log(err)
    }
  
}

// const updateProduct = async (productId: string, product :any) => {
//     const productData = new Product({
//         product
//     })
//     const foundProduct = await Product.findById(productId)
//     if (foundProduct) {
//         return await Product.findByIdAndUpdate(productId, productData)
//     } else {
//         throw new CustomError(404, 'Product infomation not found')
//     }
// }

// const deleteProduct = async (productId: string) => {
//     const foundProduct = await Product.findById(productId)
//     if (foundProduct) {
//         return await Product.findByIdAndDelete(productId)
//     } else {
//         throw new CustomError(404, 'Product infomation not found')
//     }
// }

export default {
    createCart,
    getAllCarts,
    insertProductToCart,
    getSingleCart,
}