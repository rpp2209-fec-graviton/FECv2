const axios = require('axios');

// ===========================================================================
// USAGE: fetch('products', () => { /* do something with payload */ });
// ===========================================================================

// Accepts the following endpoints:
// products
// products/:product_id
// products/:product_id/styles

// products/:product_id/related

// reviews
// /reviews/meta

// qa/questions
// qa/questions/:question_id/answers

// cart
const baseUrl = process.env.API_URL;

let fetch = async (endpoint, cb) => {
	try {
		const data = await axios({
			method: 'GET',
			url: baseUrl + `/${endpoint}`,
			headers: { 'Authorization': `${process.env.API_KEY}` }
		});
		cb(null, data);
	} catch (err) {
		cb(err);
	}
};


// ===========================================================================
// USAGE: setData('cart', body, () => { /* do something with response */ });
// ===========================================================================

// Accepts the following endpoints:
// cart
let setData = async (endpoint, body, cb) => {
	try {
		const data = await axios({
			method: 'POST',
			url: baseUrl + `/${endpoint}`,
			data: body,
			headers: { 'Authorization': `${process.env.API_KEY}` }
		});
		cb(null, data);
	} catch (err) {
		cb(err);
	}
};

module.exports = { fetch, setData };