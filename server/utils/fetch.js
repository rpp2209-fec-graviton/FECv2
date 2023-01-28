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
			'Authorization': `${process.env.API_KEY}`
		}
	}

	try {
		// console.log('Fetching: ', options.url + `/${endpoint}`);
		const data = await axios.get(options.url + `/${endpoint}`, options);
		cb(null, data);
	} catch (err) {
		// console.log("Caught Fetch Error: ", err);
		cb(err);
	}
};

module.exports = { fetch };