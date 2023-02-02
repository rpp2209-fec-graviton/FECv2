const express = require('express');
const router = express.Router();
const axios = require('axios');
const { fetch } = require('.././fetch.js');

router.get('/', (req, res) => {
	if (err) {
		console.log('Overview Routes Error');
		res.status(500).send(err);
	} else {
		console.log('You seeing this?');
		res.status(200).send('You seeing this?')
	}
});

router.get('/cart', (req, res) => {
	if (err) {
		console.log(err);
		res.status(500).send(err);
	} else {
		console.log('You seeing this CART?');
		res.status(200).send('This is the cart');
	}
});

// router.get('/cart', async (req, res) => {
// 	console.log('GET Cart Route');

// 	await fetch('/cart', (err, data) => {
// 		if (err) {
// 			console.log(err);
// 			res.send(404);
// 		} else {
// 			console.log('Cart Data', cart);
// 			res.send(200);
// 		}
// 	});
// })

// router.post('/cart', (req, res) => {
// 	console.log('POST to Cart Body', req.body);
//   // res.send(201);
// })

module.exports = router;