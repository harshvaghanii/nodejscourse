const Product = require("../models/product");
// const Cart = require("../models/cart");

exports.getProducts = (req, res, next) => {
  Product.find()
    .then((products) => {
      res.render("shop/product-list", {
        products: products,
        pageTitle: "All Products",
        path: "/products",
      });
    })
    .catch((err) => console.log(err));

  //   Product.find((products) => {
  //     res.render("shop/product-list", {
  //       products: products,
  //       pageTitle: "All Products",
  //       path: "/products",
  //     });
  //   });
};

exports.getProduct = (req, res, next) => {
  const productID = req.params.productID;

  Product.findById(productID)
    .then((product) => {
      res.render("shop/product-detail", {
        path: `/products`,
        product: product,
        pageTitle: `${product.title}`,
      });
    })
    .catch((err) => console.log(err));
};

// exports.getOrders = (req, res, next) => {
//   res.render("shop/orders", {
//     path: "/orders",
//     pageTitle: "Your Orders",
//   });
// };

exports.getIndex = (req, res, next) => {
  Product.find()
    .then((products) => {
      res.render("shop/index", {
        products: products,
        pageTitle: "Shop",
        path: "/",
      });
    })
    .catch((err) => console.log(err));
};

// exports.getCart = (req, res, next) => {
//   res.render("shop/cart", {
//     path: "/cart",
//     pageTitle: "Your Cart",
//   });
// };

// exports.postCart = (req, res, next) => {
//   const prodID = req.body.productID;
//   Product.findByID(prodID, (product) => {
//     Cart.addProduct(prodID, product.price);
//     res.redirect("/");
//   });
// };

// exports.getCheckout = (req, res, next) => {
//   res.render("shop/checkout", {
//     path: "/checkout",
//     pageTitle: "Checkout",
//   });
// };
