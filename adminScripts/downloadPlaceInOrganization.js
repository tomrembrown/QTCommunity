'use strict'

/*
 * This subroutine is to be designed to be run from node at the command 
 * prompt.It gets the place_id from the organization. Note that since the
 * organization table references the places table and the places table 
 * references the organizations table when uploading the database the
 * organization table is uploaded first, then the places table, then the
 * places_id in the organization table - so this file downloads the last
 * of three data files to be uploaded
 */

const model = require('../server/model')
const buildRowsArray = require('../joint/utils/buildRowsArray')
const saveOutput = require('./saveOutput')

async function runAll() {
  try {

    // Get all data from organization table
    const organizationsArray = await model.readOrganizations(true)
    model.close()

    // Only columns to download are to link organizations table to places table
    const columnList = ['id', 'place_id']

    // Build rows array
    const rowsArray = buildRowsArray(columnList, organizationsArray)

    // Store in final javascript object
    const finalObject = {
      columnList: columnList,
      rowsArray: rowsArray
    }

    // Convert to JSON and output
    const outputJSON = JSON.stringify(finalObject)

    await saveOutput('ORG_PLACE_JOIN',outputJSON)
  } catch (error) {
    console.log('Error: ' + error.message)
  }
}

runAll()