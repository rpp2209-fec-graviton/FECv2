require("dotenv").config();
const path = require("path");
const express = require('express')
const app = express();
const exampleRoutes = require('../ExampleData/index.js'); //e.g. exampleRoutes['/cart'];
const { fetch } = require('./fetch.js');
const logger = require('./middleware/logger.js');


app.use(logger)
app.use(express.json());
app.use(express.static(path.join(__dirname, '../dist')));

//generic route for url with any product id, ex: localhost:3000/71699
app.get('/:productId', (req, res) => {
  fetch(`products/${req.params.productId}`, function(err, productData) {
    if(err) {
      console.log('fetching error:', err);
    } else {
      //TODO: store product info in shared state (?)
      res.send(productData.data);
    }
  })
  //add actions for other components here
});

process.on("SIGINT", () => {
  console.log("Server shutting down...");
  process.exit();
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});