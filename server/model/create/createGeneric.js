'use strict'

/*
 * This method creates an entry in a database table. The data can 
 * either come from a json file read by an admin script, or from the
 * client - which is why there is a wrapper around this function for
 * data coming from the client
 */

const db = require('./../db')

const createGeneric = async function(columnList, rowsArray, tableName) {

  let createQuery =
    'INSERT INTO ' +
    tableName +
    ' (' +
    columnList.join(', ') +
    ') VALUES '
    
  const numCols = columnList.length
  const numRows = rowsArray.length

  let paramNum = 1

  let dataList = []

  for (let row = 0; row < numRows; row++) {
    dataList = dataList.concat(rowsArray[row])
    if (row > 0) { createQuery += ', ' }
    createQuery += '('
    for (let col = 0; col < numCols; col++) {
      if (col > 0) { createQuery += ', ' }
      createQuery += '$' + paramNum
      paramNum ++
    }
    createQuery += ')'
  }

  createQuery += ' RETURNING id;'
console.log(createQuery);

  try {
    let response = await db.query(createQuery, dataList);
    return response.rows[0].id;
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