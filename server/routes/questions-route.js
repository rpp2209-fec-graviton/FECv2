const express = require('express')
const router = express.Router()
const axios = require('axios');
const fetch = require('.././fetch.js');



router.get('/', (req, res) => {
  res.send([1, 2, 3]);
})

// router.get('/count')


// router.get('/product_id')


module.exports = router;