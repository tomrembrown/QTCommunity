'use strict';

const db = require('./../db');

const getIDForPlace = async function(name) {

  const getIDForPlaceQuery = 
    "SELECT id "+
    "FROM places " +
    "WHERE name='" + name + "';";

  let id;

  console.log('getIDForPlaceQuery: ' + getIDForPlaceQuery)

  try {
    const { rows } = await db.query(getIDForPlaceQuery);
    id = rows[0].id;
  } catch (err) {
    console.error('error running query', err);
  } 
  return id;
   
};

module.exports = getIDForPlace;