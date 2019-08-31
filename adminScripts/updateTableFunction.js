'use strict'

/*
 * This subroutine is run from node with two parameters - the file to update
 * and the table to update it to. Note that the first column in the file must
 * be the ID
 */

const readOutput = require('./readOutput')
const model = require('../server/model')

const updateTableFunction = async (fileToUpload, tableName) => {
  try {
    const dataObject = await readOutput(fileToUpload)
    const columnList = dataObject.columnList
    const rowsArray = dataObject.rowsArray

    await model.updateGenericMany(columnList, rowsArray, tableName)

    console.log('Updated Data Successfully in ' + tableName + '!')
  } catch (error) {
    console.log('Error updating data: ' + error.message)
  }
}

module.exports = updateTableFunction
