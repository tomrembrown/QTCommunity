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
    Object.keys(organizationData).forEach(column => {
      if (
        !columnsWithData.includes(column) &&
        column !== 'id' &&
        organizationData[column] != columnDefaults[column]
      ) {
        columnsWithData.push(column)
      }
    })
  })

  return columnsWithData
}

function selectUnique(array1, array2) {
  const uniqueArray = []

  const arr = array1.concat(array2)
  let len = arr.length
  const assoc = {}

  while (len--) {
    const item = arr[len]

    if (!assoc[item]) {
      uniqueArray.unshift(item)
      assoc[item] = true
    }
  }

  return uniqueArray
}

function buildRowsArray(columnList, organizationsArray) {
  const rowsArray = []

  organizationsArray.forEach(organizationData => {
    const thisOrganization = []
    columnList.forEach(column => {
      thisOrganization.push(organizationData[column])
    })
    rowsArray.push(thisOrganization)
  })

  return rowsArray
}

function saveOutput(outputJSON) {
  const fs = require('fs')

  const now = new Date()
  const filename = './DATA_' + 
                    now.getFullYear() +'_' + 
                    twoDigits(now.getMonth()+1) + '_' + 
                    twoDigits(now.getDate()) + '_' +
                    twoDigits(now.getHours()) + '_' + 
                    twoDigits(now.getMinutes()) + "_" + 
                    twoDigits(now.getSeconds()) + '.dat'

  fs.writeFile(filename, outputJSON, error => {
    if (error) {
      console.error(error)
      return
    }
    console.log('File ' + filename + ' has been created')
  })
}

function twoDigits(myNumber) {
  return ("0" + myNumber).slice(-2)
}