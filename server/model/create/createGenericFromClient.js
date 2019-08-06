'use strict'

/*
 * This subroutine is a wrapper around createGeneric that first
 * does some processing on data from createGeneric in order to 
 * send that to database
 */

const createGeneric = require('./createGeneric')
const buildRowsArray = require('../../../joint/utils/buildRowsArray')

const createGenericFromClient = async function(tableName, objectInputData) {

  try {
    let columnList = Object.keys(objectInputData)
    let rowsArray = buildRowsArray(columnList, objectInputData)
    return await createGeneric(columnList, rowsArray, tableName)
  } catch (error) {
    console.log(`Caught error in createGenericFromClient: ${error.message}`)
    throw error
  }

}

module.exports = createGenericFromClient
