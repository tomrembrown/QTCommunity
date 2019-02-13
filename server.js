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
const ajaxRoutes = require('./vm-server/ajaxRoutes');

// For security reasons, don't send info on server to client
app.disable('x-powered-by');

app.set('port', process.env.PORT);

// Run static files out of pubic directories in view & view-model on client
app.use('/view',express.static(path.join(__dirname,'view/public')));
app.use('/vm-client',express.static(path.join(__dirname,'vm-client/public')))
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));

// To check if test environment
app.use((req, res, next) => {
  res.locals.showTests = app.get('env') !== 'production' &&
    req.query.test === '1';
  next();
});

// The one route for now - just go to the main page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'/view/index.html'));
});

// External routes
app.use('/ajaxRoutes', ajaxRoutes);

// Prototype route for form - will eventually be replaced
app.get('/insertEventForm', (req, res) => {
  res.sendFile(path.join(__dirname,'/view/insertEventForm.html'));
});

app.get('/niceCheckbox', (req, res) => {
  res.sendFile(path.join(__dirname,'/view/niceCheckbox.html'));
});

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


