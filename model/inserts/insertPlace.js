'use strict';
const db = require('./../db');

const insertPlace = async function(objectInputData) {

  const insertPlaceQuery = "INSERT INTO places "+
                          "(name, address) " +
                          "VALUES ('" + objectInputData.name + "', '" + objectInputData.address + "');";

  try {
    await db.query(insertPlaceQuery);
    console.log('Place inserted correctly');
  } catch (err) {
    console.error('error running query', err);
  } finally {
    db.end();
  }
   
};

module.exports = insertPlace;