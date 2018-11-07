'use strict';

// Node & Express related requires
const express = require('express');

const app = express();

// Requires of my files
const generalRoutes = require('./routes/general');
const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/user');

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
app.use('/user',userRoutes);
app.use('/admin',adminRoutes);
app.use(generalRoutes);


// Page not found & error

// custom 404 page
app.use((req, res) => {
  res.status(404);
  res.render('404');
});

// custom 500 page
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500);
  res.render('500 ');
});

// Start server listening for requests from browser
app.listen(app.get('port'), () => {
  console.log( ' Express started on http://localhost:' +
    app.get('port') + '; press Ctrl-C to terminate.' );
});


