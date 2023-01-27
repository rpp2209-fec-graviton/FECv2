const express = require('express')
const router = express.Router()
const axios = require('axios');
require("dotenv").config();




router.get('/product', (req, res) => {

  res.status(200).json('sd')
  // console.log('sd');

})

// router.get('/count')


// router.get('/product_id')


module.exports = router;