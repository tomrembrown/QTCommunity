"use strict";

const quotes = [
  {quote: "There will not be a magic day when we wake up and it's now okay to express ourselves publicly.  We make that day by doing things publicly until it's simply the way things are.",
    person: "Senator Tammy Baldwin"},
  {quote: "It takes some intelligence and insight to figure out you're gay and then a tremendous amount of balls to live it and live it proudly.",
    person: "Jason Bateman"},
  {quote: "I believe that no one should ever have to choose between a career we love and living our lives with authenticity and integrity",
    person: "Selisse Berry"},
  {quote: "I've been embraced by a new community. That's what happens when you're finally honest about who you are; you find others like you.",
    person: "Chaz Bono"},
  {quote: "Openness may not completely disarm prejudice, but it's a good place to start.",
    person: "Jason Collins"},
  {quote: "I think being gay is a blessing, and it's something I am thankful for every single day.",
    person: "Anderson Cooper"},
  {quote: "It is revolutionary for any trans person to choose to be seen and visible in a world that tells us we should not exist.",
    person: "Laverne Cox"},
  {quote: "The beauty of standing up for your rights is others see you standing and stand up as well.",
    person: "Cassandra Duffy"},
  {quote: "Never be bullied into silence. Never allow yourself to be made a victim. Accept no one's definition of your life; define yourself.",
    person: "Harvey Fierstein"},
  {quote: "I hate the word homophobia. It's not a phobia. You're not scared. You're an asshole.",
    person: "Morgan Freeman"},
  {quote: "I very much want to inject gay culture into the mainstream.  It's not an underground tool for me.  It's my whole life.", 
    person: "Lady Gaga"},
  {quote: "Why is it that, as a culture, we are more comfortable seeing two men holding guns than holding hands?",
    person: "Ernest J. Gaines"},
  {quote: "Personally, coming out was one of the most important things I've ever done, lifting from my shoulders the millstone of lies that I hadn't even realized I was carrying.",
    person: "Sir Ian McKellen"},
  {quote: "When all Americans are treated as equal, no matter who they are or whom they love, we are all more free.",
    person: "Barack Obama"},
  {quote: "This world would be a whole lot better if we just made an effort to be less horrible to one another.",
    person: "Ellen Page"},
  {quote: "Every gay and lesbian person who has been lucky enough to survive thee turmoil of growing up is a survivor.  Survivors have an obligation to those who will face the same challenges.",
    person: "Bob Paris"},
  {quote: "If Harry Potter taught us anything it's that no one should live in a closet.",
    person: "J.K. Rowling"},
  {quote: "The pressures to gay teens can be overwhelming - to keep secrets, tell lies, deny who you are, and try to be who you're not.  Remember: you are special and worth being cared about, loved, and accepted just as you are.  Never, ever let anyone convince you otherwise.",
    person: "Alex Sanchez"},
  {quote: "We should indeed keep calm in the face of difference, and live our lives in a state of inclusion and wonder at the diversity of humanity.",
    person: "George Takei"},
  {quote: "Please remembeer, especially in these times of group-think and the right-on chorus, that no person is your friend (or kin) who demands your silence, or denies your right to grow and be perceived as fully blossomeed as you were intended.",
    person: "Alice Walker"}
];

exports.getQuote = () => {
  const idx = Math.floor(Math.random() * quotes.length);
  return quotes[idx];
};