const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  product_name: {
    type: String,
    require: true,
  },
  category: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  qty_available: {
    type: Number,
    require: true,
  },
  mfg_date: {
    type: Date,
    default: Date.now,
  },

  exp_date: {
    type: Date,
    default: function () {
      return new Date(this.mfg_date.getTime() + 365 * 24 * 60 * 60 * 1000);
    },
  },
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
