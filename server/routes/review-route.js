const express = require('express')
const router = express.Router()
const axios = require('axios');
require("dotenv").config();





router.post('/results', async (req, res) => {

  const product_id = 71798
  console.log(product_id, 'sd');
  try {
    const data = await axios({
      method: 'get',
      url: process.env.API_URL + `/reviews?product_id=${product_id}`,
      headers: { "Authorization": `${process.env.API_KEY}` }
    })
    console.log(data.data);
    res.status(200).json(data.data)

  } catch (error) {
    console.log(error);
    res.status(400).json('error');
  }

})



// router.get('/count')


// router.get('/product_id')


module.exports = router;