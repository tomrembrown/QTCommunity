'use strict'

const model = require('../server/model')



async function runAll() {

  try {

    // Get all data from organizations table
    const organizationsArray = await model.readOrganizations()

    // Figure out which columns to populate

    // Get list of mandatory columns
    const mandatoryColumns = await model.getMandatoryColumns('organizations')

    // Get list of columns which have data which is non-default data
    const columnDefaults = await model.getColumnDefaults('organizations')
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

    await saveOutput(outputJSON)

  } catch (error) {
    console.log('Error: ' + error.message)
  }

}

runAll()

/*
 * Subroutines
 */ 

function checkColumns(organizationsArray, columnDefaults) {
  let columnsWithData = []

  organizationsArray.forEach(organizationData => {
    Object.keys(organizationData).forEach(key => {
      if (!columnsWithData.includes(key)) {
        columnsWithData.push(key)
      }
    })
  })

  

  console.log('column defaults: ')
  console.log(columnDefaults)

  console.log('columnsWithData: ')
  console.log(columnsWithData)

  return columnsWithData
}

function selectUnique(array1, array2) {

  let uniqueArray = []


  return uniqueArray
}

function buildRowsArray(columnList, organizationsArray) {

  let rowsArray = []


  return rowsArray
}

async function saveOutput(outputJSON) {

}