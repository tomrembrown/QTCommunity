'use strict'

const createGeneric = require('./createGeneric')
const buildRowsArray = require('../../../joint/utils/buildRowsArray')

const createOrganization = async function(objectInputData) {

  try {
    let columnList = Object.keys(objectInputData)
    let rowsArray = buildRowsArray(columnList, objectInputData)
    await createGeneric(columnList, rowsArray, 'organizations')
  } catch (error) {
    console.log(`Caught error in createOrganization: ${error.message}`)
    throw error
  }

}

module.exports = createOrganization
