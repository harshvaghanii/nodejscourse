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
    this.id = Math.random().toString();
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

  static findByID(id, callback) {
    getProducts((products) => {
      const matchedIdProduct = products.find((item) => item.id == id);
      callback(matchedIdProduct);
    });
  }
}

module.exports = Product;
