'use strict'

const db = require('./../db')

const getPlaces = async function (organization) {
  let parameters = [organization]

  let getPlacesQuery =
    'SELECT * FROM places WHERE organization_id = $1;'
  let places;

  try {
    const { rows } = await db.query(getPlacesQuery, parameters)
    for(let i = 0; i < rows.count; i++){
	    places[rows[0].id] = rows[i];
    }
  } catch (err) {
    console.error('error running query', err)
  }
  return places;
}

module.exports = getPlaces
