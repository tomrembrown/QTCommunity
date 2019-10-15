'use strict'

/*
 * This method creates an entry in a database table. The data can
 * either come from a json file read by an admin script, or from the
 * client - which is why there is a wrapper around this function for
 * data coming from the client
 */

const db = require('./../db')

const createGeneric = async function(columnList, rowsArray, tableName) {
  try {
    let createQuery =
      'INSERT INTO ' + tableName + ' (' + columnList.join(', ') + ') VALUES '

    const numCols = columnList.length
    const numRows = rowsArray.length

    let paramNum = 1
    let dataList = []

    for (let row = 0; row < numRows; row++) {
      dataList = dataList.concat(rowsArray[row])
      if (row > 0) {
        createQuery += ', '
      }
      createQuery += '('
      for (let col = 0; col < numCols; col++) {
        if (col > 0) {
          createQuery += ', '
        }
        createQuery += '$' + paramNum
        paramNum++
      }
      createQuery += ')'
    }

    createQuery += ' RETURNING id;'

    let response = await db.query(createQuery, dataList)
    const id = response.rows[0].id

    // In postgresql inserting data with an id - as happens when running admin
    // script does not update a serial column to be more than id - needs to
    // be done manually
    if (columnList.includes('id')) {
      const updateIDQuery = `SELECT setval('${tableName}_id_seq', (SELECT MAX(id) from "${tableName}"));`      
      await db.query(updateIDQuery)
    }

    return id

  } catch (error) {
    console.error('error running query in createGeneric', error)
    throw Error(
      'Error running query in createGeneric.js, query: ' +
        createQuery +
        ' error: ' +
        error.message
    )
  }
}

module.exports = createGeneric
