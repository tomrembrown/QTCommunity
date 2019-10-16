'use strict'

const db = require('./../db')

const getValuesList = async function(table) {
  let textName = new Map([
    ['organizations', 'name'],
    ['places', 'name'],
    ['categories', 'name_english'],
    ['organization_types', 'name_english'],
    ['wheelchair_choices', 'name']
  ])

  let hasColourColumn = false
  if (table === 'categories') hasColourColumn = true

  const textColName = textName.get(table)

  let getValuesListQuery
  if (hasColourColumn)
    getValuesListQuery = `SELECT id, ${textColName}, colour FROM ${table};`
  else getValuesListQuery = `SELECT id, ${textColName} FROM ${table};`

  let valuesList

  try {
    const { rows } = await db.query(getValuesListQuery)
    valuesList = rows.map(row => {
      if (hasColourColumn)
        return { id: row.id, text: row[textColName], colour: row.colour }
      else return { id: row.id, text: row[textColName], colour: '000000' }
    })
  } catch (err) {
    console.error('error running query', err)
  }
  return valuesList
}

module.exports = getValuesList
