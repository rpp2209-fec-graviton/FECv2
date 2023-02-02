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

app.use(require('express-status-monitor')());
app.use(morgan(':cutoff-remaining :method :url :status :response-time ms - :res[content-length]'));
app.use(logger)
app.use(express.json());
app.use(express.static(path.join(__dirname, '../dist')));
app.use('/:productId', express.static(path.join(__dirname, '../dist')));
app.use(bodyParser.json());

// =============================================
//               Route Imports
// =============================================
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