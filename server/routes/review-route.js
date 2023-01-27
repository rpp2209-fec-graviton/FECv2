const express = require('express')
const router = express.Router()
const axios = require('axios');
require("dotenv").config();



router.get('/page', async (req, res) => {

  const data = await axios({
    method: 'get',
    url: process.env.API_URL,
    headers: {
      'Authorization': `Bearer ${process.env.API_KEY}`
    }

  }).then((data) => {
    console.log(data, 'data here');
  })
  console.log(data, 'data');


})

router.get('/product', (req, res) => {

  res.status(200).json('sd')
  console.log('sd');

})

// router.get('/count')


// router.get('/product_id')


module.exports = router;