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

exports.getQuote = function() {
  let idx = Math.floor(Math.random() * quotes.length);
  return quotes[idx];
}