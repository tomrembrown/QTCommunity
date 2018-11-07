'use strict';

// Admin routes - add organization, modify organization, add event, modify event
const express = require('express');

const quotes = require('../lib/quotes');

const router = express.Router();

router.get('/addEvent', (req, res) => {
  const randomQuote = quotes.getQuote();
  res.render('addEvent', {quote: randomQuote.quote, person: randomQuote.person});
});

router.get('/login', (req, res) => {
  const randomQuote = quotes.getQuote();
  res.render('login', {quote: randomQuote.quote, person: randomQuote.person});
});

router.get('/editDeleteEvents', (req, res) => {
  const randomQuote = quotes.getQuote();
  res.render('editDeleteEvents', {quote: randomQuote.quote, person: randomQuote.person});
});

router.get('/editOrganization', (req, res) => {
  const randomQuote = quotes.getQuote();
  res.render('editOrganization', {quote: randomQuote.quote, person: randomQuote.person});
});

router.get('/registerOrganization', (req, res) => {
  const randomQuote = quotes.getQuote();
  res.render('registerOrganization', {quote: randomQuote.quote, person: randomQuote.person});
});

router.get('/addVolunteer', (req, res) => {
  const randomQuote = quotes.getQuote();
  res.render('addVolunteer', {quote: randomQuote.quote, person: randomQuote.person});
});

router.get('/editDeleteVolunteer', (req, res) => {
  const randomQuote = quotes.getQuote();
  res.render('editDeleteVolunteer', {quote: randomQuote.quote, person: randomQuote.person});
});

module.exports = router;