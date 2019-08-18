'use strict'

/*
 * This subroutine takes one parameter of a file with organization data to upload
 * into the database and then uploads that data
 */

const readOutput = require('./readOutput')
const model = require('../server/model')

const fileToUpload = './' + process.argv[2]

readOutput(fileToUpload, dataObject => {
  const columnList = dataObject.columnList
  const rowsArray = dataObject.rowsArray

  model
  .createGeneric(columnList, rowsArray, 'organizations')
  .then(() => {
    console.log('Uploaded Data Successfully!')
    return model.close()
  })
  .catch(error => {
    console.log('Error uploading data: ' + error.message)
  })
})




