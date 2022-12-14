const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin");

// /admin/add-product => GET

router.get("/add-product", adminController.getAddProduct);

// /admin/products => GET
router.get("/products", adminController.getProducts);

// /admin/add-product => POST

router.post("/add-product", adminController.postAddProduct);

router.get("/edit-product/:productID", adminController.getEditProduct);

router.post("/edit-product", adminController.postEditProduct);

// Deleting a product

router.post("/delete-product", adminController.postDeleteProduct);

// Exports

module.exports = router;
