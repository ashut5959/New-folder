const express = require("express");
const productContoller = require("../controllers/productController");

const router = express.Router();

router.route("/product").post(productContoller.addProducts);
router.route("/allproducts").get(productContoller.getAllProducts);
router.route("/deleteProduct/:id").delete(productContoller.deleteProduct);
router.route("/updateProduct/:id").put(productContoller.updateProduct);
router.route("/products").get(productContoller.getProduct);


module.exports = router;
