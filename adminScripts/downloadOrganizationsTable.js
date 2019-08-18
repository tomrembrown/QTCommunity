'use strict'

/*
 * This subroutine is to be designed to be run from node at the command 
 * prompt. It gets all data from the organizations table, then extracts
 * only that data that is either in mandatory columns or is entered and 
 * different from the defaults. It puts it in an object with the first
 * property being an array of column names, and the second being an array
 * (of rows) of arrays (of columns) containing the data. Then it outputs
 * this to a JSON object in a file.
 */

const model = require('../server/model')
const buildRowsArray = require('../joint/utils/buildRowsArray')
const checkColumns = require('../joint/utils/checkColumns')
const selectUnique = require('../joint/utils/selectUnique')
const columnArrayToObject = require('../joint/utils/columnArrayToObject')
const saveOutput = require('./saveOutput')

async function runAll() {
  try {
    // Get all data from organizations table
    const organizationsArray = await model.readOrganizations(true)

    // Remove the places column - this won't be able to be inserted since places
    // not present now - will need to update later
    for (let i = 0; i<organizationsArray.length; i++) {
      if ('place_id' in organizationsArray[i]) delete organizationsArray[i].place_id
    }

    // Figure out which columns to populate

    // Get list of mandatory columns
    const mandatoryColumns = await model.getMandatoryColumns('organizations')

    // Get list of columns which have data which is non-default data
    const columnDefaultsArray = await model.getColumnDefaults('organizations')
    const columnDefaults = columnArrayToObject(columnDefaultsArray)
    model.close()
    const columnsWithData = checkColumns(organizationsArray, columnDefaults)

    // Build column list
    const columnList = selectUnique(mandatoryColumns, columnsWithData)

    // Build rows array
    const rowsArray = buildRowsArray(columnList, organizationsArray)

    // Store in final javascript object
    const finalObject = {
      columnList: columnList,
      rowsArray: rowsArray
    }

    // Convert to JSON and output
    const outputJSON = JSON.stringify(finalObject)

    await saveOutput('ORGANIZATIONS',outputJSON)
  } catch (error) {
    console.log('Error: ' + error.message)
  }
}

runAll()