'use strict'
/*
 * This suboutine updates a row of a table in the database, where the
 * tableName and id of the row in question are passed first
 */

const db = require('./../db')

const updateGeneric = async function(tableName, id, objectInputData) {
  try {
    let updateTableQueryStart = 'UPDATE ' + tableName + ' SET '

    let updateTableQueryEnd = ' WHERE id='

    // Loop through all data in objectInputData, adding to update query
    // and data array
    let paramNum = 1
    let dataList = []
    for (const [columnName, columnValue] of Object.entries(objectInputData)) {
      if (paramNum > 1) updateTableQueryStart += ', '
      updateTableQueryStart += columnName + ' = $' + paramNum
      dataList.push(columnValue)
      paramNum++
    }

    updateTableQueryEnd += '$' + paramNum + ';'
    dataList.push(id)

    const updateTableQuery = updateTableQueryStart + updateTableQueryEnd

    await db.query(updateTableQuery, dataList)
  } catch (error) {
    console.log(`Error in updateGeneric: ${error.message}`)
    throw error
  }
}

module.exports = updateGeneric
