const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "..", "data", "products.json");

const getProducts = (callback) => {
  fs.readFile(filePath, (err, data) => {
    if (!err) {
      callback(JSON.parse(data));
      return;
    }
    callback([]);
  });
};

class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    getProducts((products) => {
      products.push(this);
      fs.writeFile(filePath, JSON.stringify(products), (err) => {
        if (err) console.log(err);
      });
    });
  }

  static fetchAll(callback) {
    getProducts(callback);
  }
}

module.exports = Product;
