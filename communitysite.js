'use strict';

const quotes = require('./lib/quotes.js');

const express = require('express');

const app = express();

// For security reasons, don't send info on server to client
app.disable('x-powered-by');

// set up handlebars view engine
const handlebars = require('express-handlebars').create({defaultLayout: 'main'});
app.engine('handlebars',handlebars.engine);
app.set('view engine','handlebars');

app.set('port', process.env.PORT || 3000);

// Run static files out of pubic directory
app.use(express.static(__dirname + '/public'));

// To check if test environment
app.use((req, res, next) => {
  res.locals.showTests = app.get('env') !== 'production' &&
    req.query.test === '1';
  next();
});

// Routes
app.get('/about', (req, res) => {
  res.render('about', {
    pageTestScript: '/qa/tests-about.js'
  });
});

app.get('/', (req, res) => {
  const randomQuote = quotes.getQuote();
  res.render('home', {quote: randomQuote.quote, person: randomQuote.person});
});

// custom 404 page
app.use((req, res) => {
  res.status(404);
  res.render('404');
});

// custom 500 page
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500);
  res.render('error');
});

app.listen(app.get('port'), () => {
  console.log( ' Express started on http://localhost:' +
    app.get('port') + '; press Ctrl-C to terminate.' );
});


