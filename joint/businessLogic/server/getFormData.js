'use strict'
/*
 * This gets the data for a particular form from the database
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

    const tableName = getTableFromForm.get(formName)

    let columns = await model.getColumnDefaults(tableName)

    columns = removeUnneededColumns(columns, formName)

    columns = cleanColumnDefaultBooleans(columns)

    const formDataAll = await model.getColumnsForRow(tableName, columns, id)

    formData = removeDefaults(formDataAll, columns)

    console.log('final form data ')
    console.log(formData)

  } catch (error) {
    console.log(`Error in businessLogic/server/getFormData: ${error.message}`)
    throw new Error(`Error in businessLogic/server/getFormData: ${error.message}`)
  }

  return formData

}

module.exports = getFormData