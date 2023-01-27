const express = require('express')
const router = express.Router()
const axios = require('axios');
require("dotenv").config();



router.get('/page', async (req, res) => {


  console.log(process.env.API_KEY);

  const data = await axios({
    method: 'get',
    url: process.env.API_URL + '/products',
    headers: { "Authorization": `${process.env.API_KEY}` }

  }).then((data) => {
    console.log(data.data, 'data');
    res.status(200).json(data.data)
  })
  // console.log(data, 'data');


})

router.get('/product', (req, res) => {

  res.status(200).json('sd')
  // console.log('sd');

})

// router.get('/count')


// router.get('/product_id')


module.exports = router;