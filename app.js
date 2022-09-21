const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const adminRoute = require("./routes/admin");
const shopRoute = require("./routes/shop");
const pageNotFoundRoute = require("./routes/404");
const path = require("path");

const app = express();
const dotenv = require("dotenv");
dotenv.config();
// View engine setup

app.set("views", "views");
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// Database Connection

mongoose
  .connect(process.env.MONGO_URL, { useNewUrlParser: true })
  .then(() => {
    console.log("DB Connected!");
  })
  .catch((err) => {
    console.log(err);
  });

// End points

app.use("/admin", adminRoute);
app.use(shopRoute);

app.use(pageNotFoundRoute);

// Listening to the server

app.listen(3000);
