const productsController = require("../controllers/products.controller");
const products = "/getProducts";
const deleteproducts = "/deleteProduct/:id";
const postProduct = "/postProduct/:name/:desc";
const updateProduct = "/updateProduct/:id/:name/:desc";

var express = require("express");

var router = express.Router();

// Register multiple productlines routes with the router
// Each call must return the router object so we can chain calls.
router
  .get(products, productsController.getProducts)
  .delete(deleteproducts, productsController.deleteProducts)
  .post(postProduct, productsController.postProducts)
  .put(updateProduct, productsController.updateProduct);

// add the product line rounter to export
//
module.exports = router;
