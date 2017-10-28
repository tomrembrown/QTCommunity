var quotes = require('./lib/quotes.js');

var express = require('express');

var app = express();

// set up handlebars view engine
var handlebars = require('express-handlebars').create({defaultLayout: 'main'});
app.engine('handlebars',handlebars.engine);
app.set('view engine','handlebars');

app.set('port', process.env.PORT || 3000);

// Run static files out of pubic directory
app.use(express.static(__dirname + '/public'));

// To check if test environment
app.use(function(req, res, next){
  res.locals.showTests = app.get('env') !== 'production' &&
    req.query.test === '1';
  console.log('Tests: ' + req.locals.showTests);
  next();
});

// Routes
app.get('/', function(req, res){
  var randomQuote = quotes.getQuote();
  res.render('home', {quote: randomQuote.quote, person: randomQuote.person});
});

app.get('/about', function(req, res) {
  res.render('about');
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