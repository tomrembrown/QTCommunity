'use strict'

/*
 * This subroutine reads a json objects in string form from a text file
 * and then converts to a javascript object
 */

const fs = require('fs')
const util = require('util')
const readFile = util.promisify(fs.readFile)

const readOutput = async fileName => {
  try {
    const dataInput = await readFile(fileName)

    const dataObject = JSON.parse(dataInput.toString())
    return dataObject
  } catch (error) {
    console.log('Error reading file: ' + error.message)
    throw error
  }
}

module.exports = readOutput
