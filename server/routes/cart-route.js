const express = require('express');
const router = express.Router();
const axios = require('axios');
const { fetch, setData } = require('../utils/data-utils.js');

router.get('/', async (req, res) => {
	await fetch('cart', (err, cart) => {
		if (err) {
			console.log(err);
			res.status(404).json(err);
		} else {
			console.log('Cart Data', cart);
			res.status(200).json(cart);
		}
	});
})

router.post('/', async (req, res) => {
	await setData('cart', req.body, (err, data) => {
		if (err) {
			console.log('Router Cart POST Error', err);
			res.status(500).send(err);
		} else {
			console.log('Success!');
			res.status(201).send('OK');
		}
	});
})

module.exports = router;