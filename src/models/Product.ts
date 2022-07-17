import mongoose, { Schema } from "mongoose";

const Users_infoSchema = new Schema(
    {
        title: {type: String, maxlength: 60, required: true},
        description: {type: String,  maxlength: 200},
        discount: {type: Number,  min:0, max: 100},
        price: {type: Number, min:0, max: 1000},
        quantity: {type: Number, min:0, max: 1000},
        categoryId: {type: Number, min:1, required: true},
        images:[{type: String, maxlength: 100, required: true}],
       // status: {type: Number, required: true} if we suspend the product 
    }
);
//Export Product model , products will be appear in mogodb
module.exports = mongoose.model('Product', Users_infoSchema);