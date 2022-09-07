const express = require("express");
const router = express.Router();
const productController = require("../controllers/products");

// End of Imports

router.get("/", productController.getProducts);

module.exports = router;
