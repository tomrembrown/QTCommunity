var quotes = [
  {quote: "Openness may not completely disarm prejudice, but it's a good place to start.",
    person: "Jason Collins"},
  {quote: "When all Americans are treated as equal, no matter who they are or whom they love, we are all more free.",
    person: "Barack Obama"},
  {quote: "This world would be a whole lot better if we just made an effort to be less horrible to one another.",
    person: "Ellen Page"},
  {quote: "Why is it that, as a culture, we are more comfortable seeing two men holding guns than holding hands?",
    person: "Ernest J. Gaines"},
  {quote: "I hate the word homophobia. It's not a phobia. You're not scared. You're an asshole.",
    person: "Morgan Freeman"},
  {quote: "I believe that no one should ever have to choose between a career we love and living our lives with authenticity and integrity",
    person: "Selisse Berry"},
  {quote: "It takes some intelligence and insight to figure out you're gay and then a tremendous amount of balls to live it and live it proudly.",
    person: "Jason Bateman"},
  {quote: "I think being gay is a blessing, and it's something I am thankful for every single day.",
    person: "Anderson Cooper"},
  {quote: "Never be bullied into silence. Never allow yourself to be made a victim. Accept no one's definition of your life; define yourself.",
    person: "Harvey Fierstein"},
  {quote: "The beauty of standing up for your rights is others see you standing and stand up as well.",
    person: "Cassandra Duffy"},
  {quote: "I've been embraced by a new community. That's what happens when youre finally honest about who you are; you find others like you.",
    person: "Chaz Bono"},
  {quote: "We should indeed keep calm in the face of difference, and live our lives in a state of inclusion and wonder at the diversity of humanity.",
    person: "George Takei"}
];

var express = require('express');

var app = express();

// set up handlebars view engine
var handlebars = require('express-handlebars').create({defaultLayout: 'main'});
app.engine('handlebars',handlebars.engine);
app.set('view engine','handlebars');

app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  var randomQuote =
    quotes[Math.floor(Math.random() * quotes.length)];
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