const express = require('express')
const router = express.Router()
const axios = require('axios');
require("dotenv").config();





router.post('/results', async (req, res) => {

  const product_id = req.body.product_id
  const sortOrder = req.body.sortOrder;



  try {
    const data = await axios({
      method: 'get',
      url: process.env.API_URL + `/reviews?product_id=${product_id}&sort=${sortOrder}`,
      headers: { "Authorization": `${process.env.API_KEY}` }
    })
    res.status(200).json(data.data)

  } catch (error) {
    console.log(error);
    res.status(400).json('error');
  }

})



// router.get('/count')


// router.get('/product_id')


module.exports = router;