const express = require("express");
const router = express.Router();
const productController = require("../controllers/products");

router.get("/add-product", productController.getAddProductsPage);

router.post("/add-product", productController.postAddProductsPage);

// Exports

module.exports = router;
