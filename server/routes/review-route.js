const express = require('express')
const router = express.Router()
const axios = require('axios');




router.get('/page', (req, res) => {

  res.send(200);
  console.log('sd');

})

// router.get('/count')


// router.get('/product_id')


module.exports = router;