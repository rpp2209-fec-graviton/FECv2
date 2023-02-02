const express = require('express')
const router = express.Router()
const axios = require('axios');
const { fetch } = require('.././utils/fetch.js');

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

router.post('/', (req, res) => {
  try {
    axios({
      method: 'POST',
      url: process.env.API_URL + `/qa/questions`,
      headers: { "Authorization": `${process.env.API_KEY}` },
      data: req.body
    })
    .then((response) => {
      console.log(response)
      res.status(201).json(response.data);
    })
  } catch (error) {
    console.log(error);
    res.status(400).json('error');
  }
})



router.get('/:question_id/answers', (req, res) => {
  fetch(`qa/questions${req.url}`, (err, payload) => {
    if (err) {
      throw err;
    } else {
      res.send(sortList(payload.data.results, 'helpfulness'));
    }
  })
})

router.post('/:question_id/answers', (req, res) => {
  console.log(req.url, req.body)
  try {
    axios({
      method: 'POST',
      url: process.env.API_URL + `/qa/questions${req.url}`,
      headers: { "Authorization": `${process.env.API_KEY}` },
      data: req.body
    })
    .then((response) => {
      console.log(response)
      res.status(201).json(response.data);
    })
  } catch (error) {
    console.log(error);
    res.status(400).json('error');
  }
})


// router.get('/product_id')


module.exports = router;