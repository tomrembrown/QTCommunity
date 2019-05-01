'use strict'

const db = require('./../db')

const createPlace = async function (objectInputData) {
  let columnList = ['name', 'address']
  let dataList = [objectInputData.name, objectInputData.address]

  const optionalColumnList = [
    'family_friendly',
    'min_age',
    'max_age',
    'gender_female',
    'gender_male',
    'gender_transgendered',
    'gender_two_spirit',
    'gender_m2f_transexual',
    'gender_f2m_transexual',
    'gender_intersex',
    'orientation_lesbian',
    'orientation_gay',
    'orientation_bisexual',
    'orientation_queer',
    'orientation_questioning',
    'orientation_asexual',
    'orientation_pansexual',
    'orientation_heterosexual',
    'race_religion',
    'only_race_religion'
  ]

  for (let col of optionalColumnList) {
    if (typeof objectInputData[col.name] !== 'undefined') {
      columnList.push(col.name)
      dataList.push(objectInputData[col.name])
    }
  }

  let parameters = Array.from(
    [...Array(columnList.length + 1).keys()],
    x => '$' + x
  )
  parameters.shift()

  let createPlaceQuery =
    'INSERT INTO places (' +
    columnList.join(', ') +
    ') VALUES (' +
    parameters.join() +
    ');'

  try {
    await db.query(createPlaceQuery, dataList)
  } catch (err) {
    console.error('error running query', err)
  }
}

module.exports = createPlace
