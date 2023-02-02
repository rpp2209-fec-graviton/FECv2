require("dotenv").config();
const express = require('express')
const router = express.Router()
const axios = require('axios');
const { fetch } = require('../utils/fetch.js');

//generic route for url with any product id, ex: localhost:3000/71699
router.get('/:productId', (req, res) => {
  fetch(`products/${req.params.productId}`, (err, payload) => {
    if (err) {
      console.log('GET Product Error', err);
    } else {
      res.status(200).json(payload.data);
    }
  })
});


router.post('/', async (req, res) => {

  const product_id = req.body.product_id
  try {
    const data = await axios({
      method: 'get',
      url: process.env.API_URL + `/products/${product_id}`,
      headers: { "Authorization": `${process.env.API_KEY}` }
    })
    res.status(200).json(data.data)

  } catch (error) {
    res.status(400).json('error');
  }

})


module.exports = router;
