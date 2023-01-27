const express = require('express')
const router = express.Router()
const axios = require('axios');
const { fetch } = require('.././fetch.js');



router.get('/', (req, res) => {
  fetch(`qa/questions${req.url}`, (err, payload) => {
    if (err) {
      throw err;
    } else {
      res.send(payload.data.results);
    }
  })
})

// router.get('/count')


// router.get('/product_id')


module.exports = router;