'use strict'
/*
 * Gets a list of columns (passed in as array of objects 'columns' 
 * where one key of each object is column_name) from a table
 * called 'tableName' for a row with id equal to 'id'
 */

const db = require('./../db')

const getColumnsForRow = async function (tableName, columns, id) {

  // Get data for those columns
  const columnListString = columns
    .map(column => column.column_name)
    .join(', ')

  const getRowQuery =
    'SELECT ' + columnListString + 
    ' FROM ' + tableName + 
    ' WHERE id=$1;'

  let rowData
  
  try {
    const { rows } = await db.query(getRowQuery, [id])
    rowData = rows[0]
  } catch (error) {
    console.error('Error running get row query, query: ' +
      getRowQuery + ', error: ' + error.message)
    throw new Error('Error running get row query, query: ' +
      getRowQuery + ', error: ' + error.message)
  }
  return rowData
}

module.exports = getColumnsForRow