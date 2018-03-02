'use strict';

// BASE SETUP
// =============================================================================

// call the packages we need
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const logger = require('morgan');
var multer = require('multer');

const articles = require('./api/articles.js');
const login = require('./api/login.js');

// configure app
app.use(logger('dev')); // log requests to the console

// configure body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Use memory storage for any posted files rather than writing them to disk
var storage = multer.memoryStorage();
var upload = multer({ storage: storage });

const port = process.env.PORT || 3001; // set our port

// var mongoose   = require('mongoose');
// mongoose.connect('mongodb://node:node@novus.modulusmongo.net:27017/Iganiq8o'); // connect to our database
// var Bear     = require('./app/models/bear');

// ROUTES FOR OUR API
// =============================================================================

// create our router
const router = express.Router();

// middleware to use for all requests
router.use(function(req, res, next) {
  next();
});

/* API */
// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
  res.json({ message: 'hooray! welcome to our api!' });
});

router.get('/articles', articles.fetchArticles);
router.route('/login').post(login);

// Other example requests
//
// router.put('/my-maps/:id', myMaps.updateMyMap);
// router.get('/help/:id', help.help);
// router.route('/misc/log').post(misc.log);
// router.post('/login', upload.single('file'), annotations.uploadAnnotations);
// router.delete('/my-maps/:id', myMaps.deleteMyMap);
// router.route('/my-maps/:id').delete(myMaps.deleteMyMap);

// REGISTER OUR ROUTES -------------------------------
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log(`API Proxy listening on: http://localhost:${port}/api`);
