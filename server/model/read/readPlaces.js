'use strict'

const db = require('./../db')

const readPlaces = async function(organizationID) {
  let parameters = [organizationID]

  let getPlacesQuery =
    'SELECT * FROM places WHERE organization_id = $1;'
  let places;

  try {
    const {rows} = await db.query(getPlacesQuery, parameters)
    places = rows;
  } catch (err) {
    console.error('error running query', err)
  }
  return places;
}

module.exports = readPlaces;