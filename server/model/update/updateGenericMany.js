'use strict'
/*
 * This method updates many rows and possibly many columns in a database table
 * It does this using update ... from and a map in postgresql. See:
 * https://stackoverflow.com/questions/18797608/update-multiple-rows-in-same-query-using-postgresql
 * This subroutine is passed three arguments. These are:
 * columnList: array of column names as strings - there must be at least 2 with the first being 'id'
 * rowsArray: array of rows where each row is an array of data for that column
 * tableName - string of the table to update
 */

const db = require('./../db')

const updateGenericMany = async function(columnList, rowsArray, tableName) {
  // Example postgresql query:
  //    UPDATE organizations AS t SET
  //          place_id = m.place_id::integer
  //    FROM (VALUES
  //          (1, 1),
  //          (2, 2)
  //         ) AS m(id, place_id)
  //    WHERE m.id::integer = t.id;

  try {
    // Need to type case all columns in map - so first get column types
    let columnTypeQuery =
      "SELECT data_type " +
      "FROM INFORMATION_SCHEMA.COLUMNS " +
      "WHERE table_name = '" +
      tableName +
      "' AND column_name IN ('" +
      columnList.join("', '") +
      "');"

    const { rows } = await db.query(columnTypeQuery)
    const dataTypes = rows

    const numCols = columnList.length
    const numRows = rowsArray.length

    let updateTableQuery = 'UPDATE ' + tableName + ' AS t SET '

    // Skip first column since it is id - but add all other columns to query
    for (let col = 1; col < numCols; col++) {
      if (col > 1) updateTableQuery += ', '
      updateTableQuery +=
        columnList[col] +
        ' = m.' +
        columnList[col] +
        '::' +
        dataTypes[col].data_type
    }

    updateTableQuery += ' FROM (VALUES '

    let paramNum = 1
    let dataList = []

    for (let row = 0; row < numRows; row++) {
      dataList = dataList.concat(rowsArray[row])
      if (row > 0) updateTableQuery += ', '
      updateTableQuery += '('
      for (let col = 0; col < numCols; col++) {
        if (col > 0) updateTableQuery += ', '
        updateTableQuery += '$' + paramNum
        paramNum++
      }
      updateTableQuery += ')'
    }

    updateTableQuery += ') AS m('

    for (let col = 0; col < numCols; col++) {
      if (col > 0) updateTableQuery += ', '
      updateTableQuery += columnList[col]
    }

    updateTableQuery +=
      ') WHERE m. ' +
      columnList[0] +
      '::' +
      dataTypes[0].data_type +
      ' = t.' +
      columnList[0] +
      ';'

    await db.query(updateTableQuery, dataList)
  } catch (error) {
    console.log(`Error in updateGenericMany: ${error.message}`)
    throw new Error(`Error in updateGenericMany: ${error.message}`)
  }
}

module.exports = updateGenericMany
