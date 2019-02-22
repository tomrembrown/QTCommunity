'use strict';
const db = require('./../db');

const createPlace = async function(objectInputData) {

  const createPlaceQuery = 
    "INSERT INTO places "+
    "(name, address) " +
    "VALUES ('" + objectInputData.name + "', '" + objectInputData.address + "');";

  try {
    await db.query(createPlaceQuery);
    console.log('Place inserted correctly');
  } catch (err) {
    console.error('error running query', err);
  } finally {
    db.end();
  }
   
};

module.exports = createPlace;