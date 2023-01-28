const express = require('express')
const router = express.Router()
const axios = require('axios');
require("dotenv").config();



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
