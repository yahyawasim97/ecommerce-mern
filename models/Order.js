const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Cart Product Schema
const cartProductSchema = new Schema({
  productId: {
    type:String,
    required:true
  },
  price: {
    type:String,
    required:true
  },
  name: {
    type:String,
    required:true
  },
  color:{
    type:String,
    required:true
  },
  size:{
    type:String,
    required:true
  },
  imageUri: {
    type:String,
    required:true
  }
},
//As Id is already being saved which can be reference later
//Assosiation is not create as order history should have the characteristics on which it was sold
{ _id : false })

//Order Schema
const orderSchema = new Schema({
  products: [
    {
      //Nested Schema
      product: cartProductSchema,
      quantity: { type: Number, required: true }
    }
  ],
  email: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  country:{
    type:String,
    required:true
  },
  city:{
    type:String,
    required:true
  }
  }
);




module.exports = mongoose.model('Order', orderSchema);