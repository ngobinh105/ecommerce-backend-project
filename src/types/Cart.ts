import { Product } from "Product"
import { ProductType } from "ProductType"
import { UserType } from "UserType"

export  class Cart {
    constructor() {}
  
    public products: Product[] = []
    public itemQuantity: number = 0
    public CartPrice: number = 0
    public user: UserType ={
        id: "",
        userName: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        role: "",
        avatar: ""
    };

    addProduct(product: ProductType, quantity: number = 1) {
      let productToInsert = this.products.find((line) => line.productId == product.id)
      if (productToInsert != undefined) {
        productToInsert.quantity += 1
      } else if(productToInsert){

        this.products.push(productToInsert)
      }
      this.recalculate()
    }
    removeProduct(id: number) {
      let index = this.products.findIndex((line) => line.productId== id)
      this.products.splice(index, 1)
      this.recalculate()
    }
    updateQuantity(product: ProductType, quantity: number) {
      let line = this.products.find((line) => line.productId == product.id)
      if (line != undefined) {
        line.quantity = Number(quantity)
      }
      this.recalculate()
    }
  
    clear() {
      this.products = []
      this.itemQuantity = 0
      this.CartPrice = 0
    }
    private recalculate() {
      this.itemQuantity = 0
      this.CartPrice = 0
      this.products.forEach((l) => {
        this.itemQuantity += l.quantity
        this.CartPrice += l.quantity * l.price
      })
    }
  }

  