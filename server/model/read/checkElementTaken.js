'use strict'

const db = require('./../db')

const checkElementTaken = async (table, element, value) => {
  const checkElementTakenQuery =
    'SELECT id FROM ' + table + ' WHERE ' + element + ' = $1;'

  try {
    const response = await db.query(checkElementTakenQuery, [value])
    return !(response.rowCount === 0)
  } catch (error) {
    console.error(`Error in checkElementTaken: ${error.message}`)
    throw new Error(`Error in checkElementTaken: ${error.message}`)
  }
}

module.exports = checkElementTaken
