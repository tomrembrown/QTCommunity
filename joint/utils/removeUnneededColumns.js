'use strict'
/*
 * This removes columns that are not needed for a form based on what is
 * set in the constants file
 */

const constants = require('../constants')

const removeUnneededColumns = function(columns, formName) {

  // Remove some columns that we don't need
  if (constants.columnsToRemove[formName]) {
    let index
    constants.columnsToRemove[formName].forEach(columnToRemove => {
      index = columns.findIndex(
        column => column.column_name === columnToRemove
      )
      if (index > -1) {
        columns.splice(index, 1)
      }
    })
  }

  return columns

}

module.exports = removeUnneededColumns