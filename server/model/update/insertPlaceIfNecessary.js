'use strict'
/*
 * This is called when a place is added. It first checks if this is the 
 * only place for this organization, if the organization does not have a place
 * added, and if the first place for org and no place for org yet, it updates
 * the organization with this placeID
 */

const db = require('./../db')

const insertPlaceIfNecessary = async function(placeID,organizationID) {
  
  try {

    let numPlaces

    {

      // First check if only place for this organization
      const checkPlaceTableQuery = 
        "SELECT COUNT(*) " +
        "FROM places " +
        "WHERE organization_id = $1;"
      const { rows } = await db.query(checkPlaceTableQuery,[organizationID])
      numPlaces = parseInt(rows[0].count)
    }

    // Return if numPlaces greater than one - no need to continue
    if (numPlaces > 1) return

    let placeIDAlready

    {
      // Check if organization has a place added
      const checkOrganizationTableQuery = 
        "SELECT place_id " +
        "FROM organizations " +
        "WHERE ID = $1;"
      const { rows } = await db.query(checkOrganizationTableQuery, [organizationID])
      placeIDAlready = rows[0].place_id

    }
    
    // Return if there is already a place id entered - no need to insert one
    if (placeIDAlready != null) return

    // Update this entry
    const updateOrganizationTableQuery = 
      "UPDATE organizations " +
      "SET place_id = $1 " +
      "WHERE ID = $2;"
    await db.query(updateOrganizationTableQuery, [placeID, organizationID])

  } catch (error) {
    console.log(`Error in insertPlaceIntoOrgTableIfNecessary: ${error.message}`)
    throw new Error(`Error in insertPlaceIntoOrgTableIfNecessary: ${error.message}`)
  }

}

module.exports = insertPlaceIfNecessary
