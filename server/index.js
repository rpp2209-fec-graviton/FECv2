require("dotenv").config();
const path = require("path");
const express = require('express')
const app = express();
const exampleRoutes = require('../ExampleData/index.js'); //e.g. exampleRoutes['/cart'];
const logger = require('./middleware/logger.js');

app.use(express.json());
app.use(express.static(path.join(__dirname, '../dist')));
app.use(logger)




process.on("SIGINT", () => {
  console.log("Server shutting down...");
  process.exit();
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});