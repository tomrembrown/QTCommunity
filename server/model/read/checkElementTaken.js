'use strict'

const db = require('./../db')

const checkElementTaken = async (element, value) => {
  
  const checkElementTakenQuery =
    'SELECT id ' +
    'FROM organizations ' +
    'WHERE ' + element + " = '" + value + "';"

  try {
    const response = await db.query(checkElementTakenQuery)
    return !(response.rowCount === 0)
  }
  catch (err) {
    console.error('Error running query', err)
    throw Error(err)
  }
   
}

module.exports = checkElementTaken
