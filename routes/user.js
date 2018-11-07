'use strict';

// User routes - view list of organizations, view list of events
const express = require('express');

const quotes = require('../lib/quotes');

const router = express.Router();

router.get('/organizations', (req, res) => {
  const randomQuote = quotes.getQuote();
  res.render('organizations', {quote: randomQuote.quote, person: randomQuote.person});
});

router.get('/volunteer', (req, res) => {
  const randomQuote = quotes.getQuote();
  res.render('volunteer', {quote: randomQuote.quote, person: randomQuote.person});
});

module.exports = router;