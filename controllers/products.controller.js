const products = require("../services/products.service");

exports.getProducts = (req, res, next) => {
  // Validation area
  // Calling getProductLines with the req and the callback function
  products.getProducts(req, (error, results) => {
    if (error) {
      return res.status(400).send({ success: 0, data: "Bad request" });
    }
    return res.status(200).send({
      success: 1,
      data: results,
    });
  });
};

exports.deleteProducts = (req, res, next) => {
    // Validation area
    // Calling getProductLines with the req and the callback function
    products.deleteProduct(req, (error, results) => {
      if (error) {
        return res.status(400).send({ success: 0, data: "Bad request" });
      }
      return res.status(200).send({
        success: 1,
        data: results,
      });
    });
};


exports.postProducts = (req, res, next) => {
    // Validation area
    // Calling getProductLines with the req and the callback function
    products.postProduct1(req, (error, results) => {
      if (error) {
        return res.status(400).send({ success: 0, data: "Bad request" });
      }
      return res.status(200).send({
        success: 1,
        data: results,
      });
    });
};

exports.updateProduct = (req, res, next) => {
  // Validation area
  // Calling getProductLines with the req and the callback function
  products.updateProduct(req, (error, results) => {
    if (error) {
      return res.status(400).send({ success: 0, data: "Bad request" });
    }
    return res.status(200).send({
      success: 1,
      data: results,
    });
  });
};