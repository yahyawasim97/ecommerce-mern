const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderSchema = new Schema({
  products: [
    {
      product: { type: Object, required: true },
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
  }
);

module.exports = mongoose.model('Order', orderSchema);