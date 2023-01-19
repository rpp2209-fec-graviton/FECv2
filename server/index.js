require("dotenv").config();
const path = require("path");
const express = require('express')
const app = express()


app.use(express.json());
app.use(express.static(path.join(__dirname, '../dist')))

app.listen(3001)