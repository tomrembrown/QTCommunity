'use strict';
/*
 * ajaxRoutes
 *
 * This file receives Node.js express routes on the server that are intended
 * as AJAX calls to receive data and send it back to the client
 * 
 * Modification History
 * 
 * Date             Name                Description
 * February, 2019   Thomas Brown        Initial Creation
 * 
 */

const express = require('express');
const quotes = require('../lib/quotes');
const router = express.Router();

// Get a random quote from model/database and send back to client
router.get('/getRandomQuote', function(req, res) {
  const data = quotes.getRandomQuote();
  res.send(data);
});

module.exports = router;