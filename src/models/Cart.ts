import mongoose from 'mongoose'

import { ProductType } from 'ProductType';
import Product from './Product';
const { Schema } = mongoose

export class Cart{

    constructor(){}
    
    public lines:CartLine[] = [];
    public itemCount: number = 0;
    public  CartPrice: number = 0;

    addLine(product: ProductType, quantity: number = 1){
        let line = this.lines.find(line => line.product.id == product.id);
        if(line != undefined){
            line.quantity += quantity;
        }else{
            this.lines.push(new CartLine(product, quantity));
        }
        this.recalculate();
    }
    removeline(id: number){
        let index = this.lines.findIndex(line => line.product.id == id);
        this.lines.splice(index, 1);
        this.recalculate();
    }
    updateQuantity(product: ProductType, quantity: number){
        let line = this.lines.find(line => line.product.id==product.id);
        if (line != undefined){
            line.quantity = Number(quantity);
        }
        this.recalculate();
    }
  
    clear(){
        this.lines = [];
        this.itemCount=0;
        this.CartPrice=0;
    }
    private recalculate(){
        this.itemCount = 0;
        this.CartPrice = 0;
        this.lines.forEach (l =>{
            this.itemCount += l.quantity;
            this.CartPrice += (l.quantity * l.product.price);
        })
    }
}
export class CartLine{
    constructor(public product: ProductType, public quantity: number){}
    getlineTotal(){
        return this.quantity * this.product.price;
    } 
}


const cartSchema = new Schema({
  product: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  itemQuantity: {
    type : Number
},
  cartPrice:{
    type : Number
}
})

const CartModel = mongoose.model('Cart',new mongoose.Schema({
             cartSchema
}));

export default CartModel

