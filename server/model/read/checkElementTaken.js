'use strict'

const db = require('./../db')

const checkElementTaken = async function (element, value) {
  const checkElementTakenQuery =
    'SELECT id ' +
    'FROM organizations ' +
    'WHERE ' + element + " = '" + value + "';"

  console.log('checkElementTakenQuery: ' + checkElementTakenQuery)

  let isTaken

  try {
    const { rows } = await db.query(checkElementTakenQuery)
    console.log('Rows: ' + rows)
    if (rows.length === 0) { isTaken = false } else { isTaken = true }
  } catch (err) {
    console.error('error running query', err)
  }
  return isTaken
}

module.exports = checkElementTaken
