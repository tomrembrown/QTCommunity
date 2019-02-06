const dbInterface = require('./dbInterface');

const myPlace = {
  name: "The 519",
  address: "519 Church St, Toronto, ON M4Y 2C9"
};

dbInterface.insertPlace(myPlace);