require("dotenv").config();
const express = require('express')
const router = express.Router()
const axios = require('axios');
const { fetch } = require('../utils/data-utils.js');

// GET One Product's Info
router.get('/:productId', (req, res) => {
  fetch(`products/${req.params.productId}`, (err, product) => {
    if (err) {
      console.log('Error from /products/:productId Route', err);
      res.status(500).json(err);
    } else {
      console.log('product', product.data);
      res.status(200).json(product.data);
    }
  });
});

// POST & Get One Product Back
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
