const express = require("express");
const cors = require("cors");
const serverless = require("serverless-http");
const products = require("./products.json");
const app = express();
const router = express.Router();
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

router.get("/products", (req, res) => {
  res.json(products);
});

app.use("/.netlify/functions/api", router);

module.exports.handler = serverless(app);
