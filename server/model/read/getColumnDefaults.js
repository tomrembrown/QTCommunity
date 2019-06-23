'use strict'
/*
 * Makes an SQL query to get the list of columns with their defaults
 * from a given table
 */

const db = require('./../db')

const getColumnDefaults = async function (tableName) {

  let columnDefaults = {}
  
  try {
    const getColumnDefaultsQuery = 
      "SELECT column_name, column_default FROM information_schema.columns " +
      "WHERE table_name = $1;"

    

    let columnName = 'test'
    let columnDefault = 'test'

    columnDefaults[columnName] = columnDefault
  
    const { rows } = await db.query(getColumnDefaultsQuery, [tableName])
    columnDefaults = rows
    
  } catch (error) {
    console.log(`Error in getColumnDefaults: ${error.message}`)
    throw new Error(`Error in getColumnDefaults: ${error.message}`)
  }

  let columnDefaultsObject = {}

  columnDefaults.forEach(columnObject => {
    columnDefaultsObject[columnObject.column_name] = columnObject.column_default
  })

  return columnDefaultsObject

}

module.exports = getColumnDefaults