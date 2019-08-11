'use strict'
/*
 * This creates an unhashed token which is a combination of a function of the current
 * date and time, plus the login and password. Then it updates the database with the
 * token, using the database to run a MD5 has on the token, as well as the current
 * date and time in the last logged field. Finally it retrieves the hashed token from
 * the database and returns it
 */

const db = require('./../db')

const deletePlace = async function(organizationID, placeID) {
  try {
    await db.query("DELETE FROM places WHERE organization_id = $1 AND id = $2;", [organizationID, placeID])
  } catch (error) {
    console.log(`Error in deletePlace: ${error.message}`)
    throw new Error(`Error in deletePlace: ${error.message}`)
  }
}

module.exports = deletePlace
