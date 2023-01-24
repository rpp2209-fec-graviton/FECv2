require("dotenv").config();
const axios = require('axios');

// ===========================================================================
// USAGE: fetch('products', () => { /* do something with payload */ });
// ===========================================================================

// Accepts the following arguments, per the Atelier API documentation:
// PRODUCTS
// products
// products/:product_id
// products/:product_id/styles

// RELATED PRODUCTS
// products/:product_id/related

// REVIEWS
// reviews
// /reviews/meta

// QUESTIONS
// qa/questions
// qa/questions/:question_id/answers

// CART
// cart
let fetch = async (endpoint, cb) => {
	let options = {
		url: process.env.API_URL,
		headers: {
			'User-Agent': 'request',
			'Authorization': `${process.env.API_TOKEN}`
		}
	}

	try {
		console.log('Fetching: ', process.env.API_URL);
		const data = await axios.get(options.url + `/${endpoint}`, options);
		cb(null, data);
	} catch (err) {
		console.log("Caught Fetch Error: ", err);
		cb(err);
	}
};

module.exports = { fetch };