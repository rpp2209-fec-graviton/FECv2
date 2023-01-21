require("dotenv").config();
const path = require("path");
const express = require('express')
const app = express();
const exampleRoutes = require('../ExampleData/index.js'); //e.g. exampleRoutes['/cart'];


app.use(express.json());
app.use(express.static(path.join(__dirname, '../dist')));


app.listen(3001);