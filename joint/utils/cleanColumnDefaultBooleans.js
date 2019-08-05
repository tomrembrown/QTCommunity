'use strict'
/*
 * For some reason the column defaults coming from the postgresql
 * database have 'true' for true and 'false' for false - this 
 * function replaces the strings with booleans for these
 */

const cleanColumnDefaultBooleans = function(inColumns) {

  const outColumns = inColumns.map(columnObject => {
    let newColumnObject = {}
    newColumnObject.column_name = columnObject.column_name
    if (columnObject.column_default === 'false') {
      newColumnObject.column_default = false
    } else if (columnObject.column_default === 'true') {
      newColumnObject.column_default = true
    } else {
      newColumnObject.column_default = columnObject.column_default
    }
    return newColumnObject
  })

  return outColumns

}

module.exports = cleanColumnDefaultBooleans

