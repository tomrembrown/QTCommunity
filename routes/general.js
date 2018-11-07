'use strict';

// General routes - home page, about page
const express = require('express');

const quotes = require('../lib/quotes');

const router = express.Router();

router.get('/', (req, res) => {
  const randomQuote = quotes.getQuote();
  res.render('calendar', {quote: randomQuote.quote, person: randomQuote.person});
});

router.get('/contact', (req, res) => {
  const randomQuote = quotes.getQuote();
  res.render('contact', {quote: randomQuote.quote, person: randomQuote.person});
});

router.get('/about', (req, res) => {
  const randomQuote = quotes.getQuote();
  res.render('about', {
  	quote: randomQuote.quote, person: randomQuote.person,
    pageTestScript: '/qa/tests-about.js'
  });
});

module.exports = router;