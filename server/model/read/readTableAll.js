'use strict'
/*
 * This gets all data in a given table - used primarily for
 * downloading the .dat files in downloadLatest and uploadLatest
 * scripts.
 */

const db = require('./../db')

// Ensure times in event_details is downloaded properly
process.env.TZ = 'UTC'

const readTableAll = async function(tableName) {
  let getTableQuery = `SELECT * FROM ${tableName};`
  let allData

  try {
    const { rows } = await db.query(getTableQuery)
    allData = rows
  } catch (err) {
    console.error('error running query in readTableAll', err)
  }

  return allData
}

module.exports = readTableAll
