'use strict'

const db = require('./../db')

const readPlacesAll = async function() {
  let getPlacesQuery = 'SELECT * FROM places;'
  let places

  try {
    const { rows } = await db.query(getPlacesQuery)
    places = rows
  } catch (err) {
    console.error('error running query', err)
  }
  return places
}

module.exports = readPlacesAll
