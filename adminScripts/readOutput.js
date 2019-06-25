'use strict'

/*
 * This subroutine reads a json objects in string form from a text file
 * and then converts to a javascript object
 */

const fs = require('fs')

const readOutput = (fileName, callback) => {
  
  fs.readFile(fileName, (error, dataInput) => {
    if (error) {
      console.log('Error reading file: ' + error.message)
      throw error
    }
    else {
      const dataObject = JSON.parse(dataInput.toString())
      callback(dataObject)
    }

  })

}

module.exports = readOutput
