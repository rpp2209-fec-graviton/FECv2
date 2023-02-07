const express = require('express')
const router = express.Router()
const axios = require('axios');
const { fetch } = require('.././utils/data-utils.js');

var sortList = (array, key) => {
  return (
    array.sort((a, b) => {
      return b[key]- a[key]
    })
  )
}


router.get('/questions', (req, res) => {
  fetch(`qa${req.url}`, (err, payload) => {
    if (err) {
      throw err;
    } else {
      res.send(sortList(payload.data.results, 'question_helpfulness'));
    }
  })
})

router.post('/questions', (req, res) => {
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



router.get('/questions/:question_id/answers', (req, res) => {
  fetch(`qa${req.url}`, (err, payload) => {
    if (err) {
      throw err;
    } else {
      res.send(sortList(payload.data.results, 'helpfulness'));
    }
  })
})

router.post('/questions/:question_id/answers', (req, res) => {
  try {
    axios({
      method: 'POST',
      url: process.env.API_URL + `/qa${req.url}`,
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

router.put('/questions/:question_id/report', (req, res) => {
    axios({
      method: 'PUT',
      url: process.env.API_URL + `/qa${req.url}`,
      headers: { "Authorization": `${process.env.API_KEY}` },
    })
    .then((response) => {
      console.log(response)
      res.status(204).json(response.data);
    })
    .catch((error) =>{
    console.log(error);
    res.status(400).json('error');
    });
})

router.put('/answers/:answer_id/report', (req, res) => {
  axios({
    method: 'PUT',
    url: process.env.API_URL + `/qa${req.url}`,
    headers: { "Authorization": `${process.env.API_KEY}` },
  })
  .then((response) => {
    console.log(response)
    res.status(204).json(response.data);
  })
  .catch((error) =>{
  console.log(error);
  res.status(400).json('error');
  });
})


module.exports = router;