'use strict'
/*
 * This removes data for a form where the data is equal to the defaults
 */

const constants = require('../constants')

const removeUnneededColumns = function(formDataAll, columns) {

  let formData = {}
  // Only include those things that are not a default
  for (const [columnName, columnValue] of Object.entries(formDataAll)) {
    if (
      columns[columns.findIndex(column => column.column_name === columnName)]
        .column_default !== columnValue
    ) {
      formData[columnName] = columnValue
    }
  }

  return formData

}

module.exports = removeUnneededColumns