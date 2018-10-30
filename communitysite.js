"use strict";

let quotes = require('./lib/quotes.js');

let express = require('express');

let app = express();

// set up handlebars view engine
let handlebars = require('express-handlebars').create({defaultLayout: 'main'});
app.engine('handlebars',handlebars.engine);
app.set('view engine','handlebars');

app.set('port', process.env.PORT || 3000);

// Run static files out of pubic directory
app.use(express.static(__dirname + '/public'));

// To check if test environment
app.use(function(req, res, next){
  res.locals.showTests = app.get('env') !== 'production' &&
    req.query.test === '1';
  next();
});

// Routes
app.get('/', function(req, res){
  const randomQuote = quotes.getQuote();
  res.render('home', {quote: randomQuote.quote, person: randomQuote.person});
});

app.get('/about', function(req, res) {
  res.render('about', {
    pageTestScript: '/qa/tests-about.js'
  });
});

// custom 404 page
app.use(function(req, res){
  res.status(404);
  res.render('404');
});

// custom 500 page
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), function(){
  console.log( ' Express started on http://localhost:' +
    app.get('port') + '; press Ctrl-C to terminate.' );
});


