'use strict'

/*
 * This subroutine is run from node with two parameters - the file to update
 * and the table to update it to. Note that the first column in the file must
 * be the ID
 * It is called as:
 * node upateTable.js FILENAME.dat table
 * For example:
 * node upateTable.js ORG_PLACE_LATEST.dat organizations
 */

const fileToUpload = './' + process.argv[2]
const tableName = process.argv[3]

const updateTableFunction = require('./updateTableFunction')
const model = require('../server/model')

const runAll = async () => {
  await updateTableFunction(fileToUpload, tableName)
  model.close()
}

runAll()