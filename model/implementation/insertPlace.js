'use strict';
const db = require('./database');

const insertPlace = function(objectInputData) {

  const insertPlaceQuery = "INSERT INTO places "+
                          "(name, address) " +
                          "VALUES ('" + objectInputData.name + "', '" + objectInputData.address + "');";

  db.query(insertPlaceQuery, (err, res) => {
    if (err) {
      return console.error('error running query', err);
    }
    console.log('Place inserted correctly');
    db.end();
  });
}

module.exports = insertPlace;