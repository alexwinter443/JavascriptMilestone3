const express = require("express");
const mySqlConnect = require("./connection/mysql_connect");
const app = express();
const productlinesRoutes = require("./routes/productlines.route");
const musicRoutes = require("./routes/album.route");
const productsRoutes = require("./routes/products.route");


app.use(express.static('app/images'))


// Initialize the MySQl connection pool
mySqlConnect.init();

// prepare to parse request body
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use("/api", productlinesRoutes);
app.use("/music", musicRoutes);
app.use("/products", productsRoutes);

app.listen(3000, () => {
  console.log("listening...");
});