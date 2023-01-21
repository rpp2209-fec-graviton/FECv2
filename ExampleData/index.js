const productsAPI = require('./APIs/products');
const cartAPI = require('./APIs/cart');
const questionsAPI = require('./APIs/questions');
const reviewsAPI = require('./APIs/reviews');

module.exports = {...cartAPI, ...productsAPI, ...questionsAPI, ...reviewsAPI};