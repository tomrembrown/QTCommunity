'use strict'

/*
 * This subroutine is run from node with two parameters - the file to upload
 * and the table to upload it into
 * It is called as:
 * node uploadTable.js FILENAME.dat table
 * For example:
 * node uploadTable.js PLACES_2019_08_18_19_54_25.DAT places
 */

const fileToUpload = './' + process.argv[2]
const tableName = process.argv[3]

const uploadTableFunction = require('./uploadTableFunction')
const model = require('../server/model')

const runAll = async () => {
  await uploadTableFunction(fileToUpload, tableName)
  model.close()
}

runAll()
