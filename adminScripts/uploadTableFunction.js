'use strict'

/*
 * This subroutine is uploads data to a table. The first parameter
 * is the file to upload, and the second parameter is the table
 */

const readOutput = require('./readOutput')
const model = require('../server/model')

const uploadTableFunction = async (fileToUpload, tableName) => {

  try {
    const dataObject = await readOutput(fileToUpload)
    const columnList = dataObject.columnList
    const rowsArray = dataObject.rowsArray

    await model.createGeneric(columnList, rowsArray, tableName)

    console.log('Uploaded Data Successfully to ' + tableName + '!')

  } catch(error) {
    console.log('Error uploading data: ' + error.message)
  }

}

module.exports = uploadTableFunction
