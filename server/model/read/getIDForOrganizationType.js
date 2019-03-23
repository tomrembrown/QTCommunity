'use strict';

const db = require('./../db');

const getIDForOrganizationType = async function(name) {

  const getIDForOrganizationTypeQuery = 
    "SELECT id "+
    "FROM organization_types " +
    "WHERE name_english='" + name + "';";

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