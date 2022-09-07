const Product = require("../models/product");

exports.getAddProductsPage = (req, res, next) => {
  res.render("add-product", {
    path: "/admin/add-product",
    title: "Add a Product",
  });
};

exports.postAddProductsPage = (req, res, next) => {
  //   products.push({ title: req.body.title });
  const product = new Product(req.body.title);
  product.save();
  res.status(302).redirect("/");
};

exports.getProducts = (req, res, next) => {
  const products = Product.fetchAll();
  console.log(products);

  res.render("shop", {
    path: "/",
    title: "Welcome",
    products: products,
  });
};
