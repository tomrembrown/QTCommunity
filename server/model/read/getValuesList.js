'use strict'

const db = require('./../db')

const getValuesList = async function(table) {

  let textName = new Map([
    ['organizations', 'name'],
    ['places', 'name'],
    ['categories', 'name_english'],
    ['organization_types', 'name_english']
  ])

  const textColName = textName.get(table)

  const getValuesListQuery = 
    "SELECT id, " + textColName + 
    " FROM " + table + ";"

  let valuesList

  try {
    const { rows } = await db.query(getValuesListQuery)
    valuesList = rows.map((row) => {
      return { id: row.id, text: row[textColName] }
    })
  } catch (err) {
    console.error('error running query', err)
  } 
  return valuesList
   
}

module.exports = getValuesList