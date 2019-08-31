'use strict'
/*
 * This gets the data for a particular form from the database
 * - used for populating the edit forms in client
 */

const model = require('../../../server/model')
const { getTableFromForm } = 
  require('../../dataValidation/general/formsAndTable')
const removeUnneededColumns = require('../../utils/removeUnneededColumns')
const cleanColumnDefaultBooleans = require('../../utils/cleanColumnDefaultBooleans')
const removeDefaults = require('../../utils/removeDefaults')

const getFormData = async function(formName, id) {

  let formData

  try {

    // Get table name based on form name - form formsAndTable file
    const tableName = getTableFromForm.get(formName)

    // Get list of all columns in this table and their defaults
    let columns = await model.getColumnDefaults(tableName)

    // Remove columns we don't need to get data from based on what is in constants file
    // such as login token, or the french columns
    columns = removeUnneededColumns(columns, formName)

    // The column defaults have 'false' and 'true' as strings - so convert to boolean
    columns = cleanColumnDefaultBooleans(columns)

    // Database call to get all data for the list of columns for row with id = id
    const formDataAll = await model.getColumnsForRow(tableName, columns, id)

    // Remove anything that is a default before sending to client side
    formData = removeDefaults(formDataAll, columns)

  } catch (error) {
    console.log(`Error in businessLogic/server/getFormData: ${error.message}`)
    throw new Error(`Error in businessLogic/server/getFormData: ${error.message}`)
  }

  return formData

}

module.exports = getFormData