const Product = require("../models/productModel");

//Insert products
exports.addProducts = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.status(201).json({
      status: "success",
      newProduct,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//get all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({
      status: "success",
      products,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedProduct) {
      res.status(404).json({ error: "Product not found" });
    }

    res.status(200).json({
      status: "success",
      updatedProduct,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    console.log(req.params.id);
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);

    if (!deletedProduct) {
      res.status(404).json({ error: "Product not found" });
    }

    res.status(204).json({
      status: "deleted",
      data: null,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getProduct = async (req, res) => {
  try {
    const { category } = req.query;
    if (!category) {
      return res.status(400).json({ error: "Category parameter is required" });
    }

    const filteredProduct = await Product.find({ category: category });
    if (!filteredProduct) {
      res.status(404).json({
        error: "Products not found",
      });
    }

    res.status(200).json({
      status: "success",
      length: filteredProduct.length,
      filteredProduct,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
