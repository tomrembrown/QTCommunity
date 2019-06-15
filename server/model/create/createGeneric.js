'use strict'

const db = require('./../db')

const createGeneric = async function(
  objectInputData,
  possibleColumnList,
  tableName
) {
  let columnList = []
  let dataList = []

  for (let col of possibleColumnList) {
    if (typeof objectInputData[col] !== 'undefined') {
      columnList.push(col)
      dataList.push(objectInputData[col])
    }
  }

  let parameters = Array.from(
    [...Array(columnList.length + 1).keys()],
    x => '$' + x
  )
  parameters.shift()

  const createQuery =
    'INSERT INTO ' +
    tableName +
    ' (' +
    columnList.join(', ') +
    ') VALUES (' +
    parameters.join() +
    ');'

  try {
    await db.query(createQuery, dataList)
  } catch (err) {
    console.error('error running query in createGeneric', err)
    throw Error(
      'Error running query in createGeneric.js, query: ' +
      createQuery +
      ' error: ' +
      err.message
    )
  }
}

module.exports = createGeneric