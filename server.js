'use strict';

// Node & Express related requires
const express = require('express');
const app = express();
const path = require('path');

// Additional requires
require('dotenv').config();  // load the environment variables from .env
const querystring = require('querystring');

// Parse the input
const bodyParser = require('body-parser');
app.use(bodyParser.json());


// Requires of my files
const quotes = require('./lib/quotes');
const generalRoutes = require('./routes/general');
const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/user');

// For security reasons, don't send info on server to client
app.disable('x-powered-by');

app.set('port', process.env.PORT);

// Run static files out of pubic directory
app.use('/public',express.static(path.join(__dirname,'public')));
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));

// To check if test environment
app.use((req, res, next) => {
  res.locals.showTests = app.get('env') !== 'production' &&
    req.query.test === '1';
  next();
});

// The one route for now - just go to the main page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'/templates/index.html'));
});

// An AJAX call to get a quote
app.get('/getQuote', function(req, res) {
  const data = quotes.getQuote();
  res.send(data);
});

// Routes
app.use('/user',userRoutes);
app.use('/admin',adminRoutes);
app.use(generalRoutes);


// Page not found & error

// custom 404 page
//app.use((req, res) => {
//  res.status(404);
//  res.render('404');
//});

// custom 500 page
//app.use((err, req, res, next) => {
//  console.error(err.stack);
//  res.status(500);
//  res.render('500 ');
//});

// Start server listening for requests from browser
app.listen(app.get('port'), () => {
  console.log( ' Express started on http://localhost:' +
    app.get('port') + '; press Ctrl-C to terminate.' );
});


