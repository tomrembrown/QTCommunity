'use strict'

/*
 * This subroutine is to be designed to be run from node at the command 
 * prompt. It gets all data from a given table, then extracts
 * only that data that is either in mandatory columns or is entered and 
 * different from the defaults. It puts it in an object with the first
 * property being an array of column names, and the second being an array
 * (of rows) of arrays (of columns) containing the data. Then it outputs
 * this to a JSON object in a file. It is designed to be passed with one
 * parameter - the name of the table
 */

const tableName = process.argv[2]

const model = require('../server/model')
const buildRowsArray = require('../joint/utils/buildRowsArray')
const checkColumns = require('../joint/utils/checkColumns')
const selectUnique = require('../joint/utils/selectUnique')
const columnArrayToObject = require('../joint/utils/columnArrayToObject')
const saveOutput = require('./saveOutput')

async function runAll() {
  try {
    // Set the time zone to UTC
    await model.setTimeZoneUTC()

    // Get all data from table
    const tableArray = await model.readTableAll(tableName)

    // Figure out which columns to populate

    // Get list of mandatory columns
    const mandatoryColumns = await model.getMandatoryColumns(tableName)

    // Get list of columns which have data which is non-default data
    const columnDefaultsArray = await model.getColumnDefaults(tableName)
    const columnDefaults = columnArrayToObject(columnDefaultsArray)
    model.close()
    const columnsWithData = checkColumns(tableArray, columnDefaults)

    // Build column list
    const columnList = selectUnique(mandatoryColumns, columnsWithData)

    if (tableName.toLowerCase() === 'organizations') {
      // Remove the places column - this won't be able to be inserted since places
      // not present now - will need to update later
      const index = columnList.indexOf('place_id')
      if (index > -1) {
        columnList.splice(index,1)
      }
    }

    // Build rows array
    const rowsArray = buildRowsArray(columnList, tableArray)

    // Store in final javascript object
    const finalObject = {
      columnList: columnList,
      rowsArray: rowsArray
    }

    // Convert to JSON and output
    const outputJSON = JSON.stringify(finalObject)

    await saveOutput(tableName.toUpperCase(),outputJSON)
  } catch (error) {
    console.log(`Error in downloadTable, table: ${tableName}, error: ${error.message}`)
  }
}

runAll()