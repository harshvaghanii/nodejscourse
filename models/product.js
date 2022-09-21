const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Product", productSchema);

// Product model for File system

// const fs = require("fs");
// const path = require("path");
// const filePath = path.join(__dirname, "..", "data", "products.json");

// const getProducts = (callback) => {
//   fs.readFile(filePath, (err, data) => {
//     if (!err) {
//       callback(JSON.parse(data));
//       return;
//     }
//     callback([]);
//   });
// };

// class Product {
//   constructor(id, title, imageUrl, description, price) {
//     this.id = id;
//     this.title = title;
//     this.imageUrl = imageUrl;
//     this.description = description;
//     this.price = price;
//   }

//   save() {
//     getProducts((products) => {
//       if (this.id) {
//         const indexOfProduct = products.findIndex(
//           (item) => item.id === this.id
//         );
//         const updatedProducts = [...products];
//         updatedProducts[indexOfProduct] = this;
//         fs.writeFile(filePath, JSON.stringify(updatedProducts), (err) => {
//           if (err) console.log(err);
//         });
//       } else {
//         this.id = Math.random().toString();
//         products.push(this);
//         fs.writeFile(filePath, JSON.stringify(products), (err) => {
//           if (err) console.log(err);
//         });
//       }
//     });
//   }

//   static fetchAll(callback) {
//     getProducts(callback);
//   }

//   static findByID(id, callback) {
//     getProducts((products) => {
//       const matchedIdProduct = products.find((item) => item.id == id);
//       callback(matchedIdProduct);
//     });
//   }

//   static deleteById(id) {
//     getProducts((products) => {
//       const updatedProducts = products.filter((item) => item.id != id);
//       fs.writeFile(filePath, JSON.stringify(updatedProducts), (err) => {
//         if (err) console.log(err);
//       });
//     });
//   }
// }

// module.exports = Product;
