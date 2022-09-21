const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "..", "data", "cart.json");

// const getAllCartItems = (callback) => {
//   fs.readFile(filePath, (err, data) => {
//     if (!err) {
//       const items = JSON.parse(data);
//       callback(items);
//     } else {
//       callback([]);
//     }
//   });
// };

class Cart {
  
  static fetchAllItems = (callback) => {
    fs.readFile(filePath, (err, data) => {
      if (!err) {
        const cartItems = JSON.parse(data);
        callback(cartItems);
      } else {
        callback({});
      }
    });
  };

  static addProduct(id, productPrice) {
    // * Fetch the previous cart

    fs.readFile(filePath, (err, data) => {
      let cart = { products: [], price: 0 };
      if (!err) {
        cart = JSON.parse(data);
      }

      // *  Analyse the cart => Find index of existing product

      let existingProductIndex = cart.products.findIndex(
        (item) => item.id == id
      );
      let existingProduct = cart.products[existingProductIndex];
      let updatedProduct;
      if (existingProduct) {
        updatedProduct = { ...existingProduct };
        updatedProduct.qty = updatedProduct.qty + 1;
        cart.products = [...cart.products];
        cart.products[existingProductIndex] = updatedProduct;
      } else {
        updatedProduct = { id: id, qty: 1 };
        cart.products = [...cart.products, updatedProduct];
      }
      cart = { ...cart };
      cart.price += +productPrice;
      fs.writeFile(filePath, JSON.stringify(cart), (err) => {
        if (err) console.log(err);
      });
    });
  }
}

module.exports = Cart;
