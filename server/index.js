require("dotenv").config();
const path = require("path");
const express = require('express')
const app = express();
const exampleRoutes = require('../ExampleData/index.js'); //e.g. exampleRoutes['/cart'];
const { fetch } = require('./utils/fetch.js');
const logger = require('./middleware/logger.js');
const morganBody = require('morgan-body');
const bodyParser = require('body-parser');
const morgan = require('morgan');

app.use(require('express-status-monitor')());

morganBody(app,
  {
    logReqUserAgent: true,
    logRequestBody: true,
    logResponseBody: true,
    logReqHeaders: true,
    logResHeaders: true,
    logReqIp: true,
    logReqUrl: true,
    logReqMethod: true,
    logResStatus: true,
    logTime: true,
    logLevel: 'debug',
    logColor: true,
    logFile: './logs/requests.log',
    maxBodyLength: process.env.MAX_BODY_LENGTH || 2000,
    stream: process.stdout,
    theme: process.env.THEME || 'lightened',
    // skip: function (req, res) { return res.statusCode < 400 }
  });

morgan.token('cutoff-remaining', function (req, res) {
  return process.memoryUsage().heapUsed;
});

app.use(morgan(':cutoff-remaining :method :url :status :response-time ms - :res[content-length]'));
app.use(logger)
app.use(express.json());
app.use(express.static(path.join(__dirname, '../dist')));
app.use('/:productId', express.static(path.join(__dirname, '../dist')));
app.use(bodyParser.json());

// Get Products from Atelier API
app.get('/products', (req, res) => {
  fetch('products', (err, products) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(200).send(products);
    }
  });
});

//generic route for url with any product id, ex: localhost:3000/71699
app.get('/:productId', (req, res) => {
  if (req.params.productId !== 'favicon.ico') {
    fetch(`products/${req.params.productId}`, function (err, productData) {
      if (err) {
        console.log('fetching error:', err);
      } else {
        //TODO: store product info in shared state (?)
        res.send(productData.data);
      }
    })
    //add actions for other components here
  }
});

app.use('/interactions', require('./routes/interactions-route'));
app.use('/products', require('./routes/product-route'))
app.use('/reviews', require('./routes/review-route'))
app.use('/qa/questions', require('./routes/questions-route'));

process.on("SIGINT", () => {
  console.log("Server shutting down...");
  process.exit();
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server running on port ${process.env.PORT || 3000}`);
});