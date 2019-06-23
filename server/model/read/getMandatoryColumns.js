'use strict'
/*
 * Makes an SQL query to get the list of mandatory columns (those that can't be
 * null and don't accept a default) from a particular table
 */

const db = require('./../db')

const getMandatoryColumns = async function (tableName) {

  const getMandatoryColumnsQuery = 
    "SELECT column_name FROM information_schema.columns " +
    "WHERE table_name = $1 " +
    "AND is_nullable = 'NO' " +
    "AND column_default is null;"

  let mandatoryColumns = null

  try {
    const { rows } = await db.query(getMandatoryColumnsQuery, [tableName])
    mandatoryColumns = rows.map(row => row.column_name)
  } catch (error) {
    console.log(`Error in getManatoryColumns: ${error.message}`)
    throw new Error(`Error in getManatoryColumns: ${error.message}`)
  }

  return mandatoryColumns
}

module.exports = getMandatoryColumns