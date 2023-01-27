const express = require('express')
const router = express.Router()
const axios = require('axios');
const { fetch } = require('.././fetch.js');

var sortList = (array, key) => {
  return (
    array.sort((a, b) => {
      return b[key]- a[key]
    })
  )
}


router.get('/', (req, res) => {
  fetch(`qa/questions${req.url}`, (err, payload) => {
    if (err) {
      throw err;
    } else {
      res.send(sortList(payload.data.results, 'question_helpfulness'));
    }
  })
})

// router.get('/count')


// router.get('/product_id')


module.exports = router;