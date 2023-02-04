const express = require('express')
const router = express.Router()
const axios = require('axios');
const { fetch } = require('.././utils/fetch.js');

//Route for hadling interactions
router.post('/', async (req, res) => {
  var {element, time, widget} = req.body;
  try {
    const result = await axios({
      method: 'POST',
      url: process.env.API_URL + `/interactions`,
      headers: { "Authorization": `${process.env.API_KEY}` },
      data: req.body
    });
    console.log('Successfully logged interaction for, ', element);
    res.status(201);
  } catch (error) {
    console.log(error);
    res.status(422).json('error in logging interaction');
  }
})

module.exports = router;