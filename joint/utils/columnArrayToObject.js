'use strict'
/*
 * This converts an array of column name and column defaults into an
 * object with the column default as the value and the column name 
 * as the key
 */

const columnArrayToObject = function(columnDefaults) {
  let columnDefaultsObject = {}

  columnDefaults.forEach(columnObject => {
    columnDefaultsObject[columnObject.column_name] = columnObject.column_default
  })

  return columnDefaultsObject
}

module.exports = columnArrayToObject