'use strict';
const db = require('./../db');

const createPlace = async function(objectInputData) {

  let createPlaceQuery = "INSERT INTO places "

  let columnList = "(name, address"
  let columnData = "VALUES ('" + objectInputData.name 
                               + "', '" + objectInputData.address + "'"

  const optionalColumnList = [
    { name: "family_friendly", useQuotes: false },
    { name: "min_age", useQuotes: false },
    { name: "max_age", useQuotes: false },
    { name: "gender_female", useQuotes: false },
    { name: "gender_male", useQuotes: false },
    { name: "gender_transgendered", useQuotes: false },
    { name: "gender_two_spirit", useQuotes: false },
    { name: "gender_m2f_transexual", useQuotes: false },
    { name: "gender_f2m_transexual", useQuotes: false },
    { name: "gender_intersex", useQuotes: false },
    { name: "orientation_lesbian", useQuotes: false },
    { name: "orientation_gay", useQuotes: false },
    { name: "orientation_bisexual", useQuotes: false },
    { name: "orientation_queer", useQuotes: false },
    { name: "orientation_questioning", useQuotes: false },
    { name: "orientation_asexual", useQuotes: false },
    { name: "orientation_pansexual", useQuotes: false },
    { name: "orientation_heterosexual", useQuotes: false },
    { name: "race_religion", useQuotes: true },
    { name: "only_race_religion", useQuotes: false }
  ]
 
  for (let col of optionalColumnList) {
    if (typeof objectInputData[col.name] !== 'undefined') {
      columnList += ", " + col.name;

      columnData += ", " + (col.useQuotes ? "'" : "")
      columnData += objectInputData[col.name]
      columnData += (col.useQuotes ? "'" : "")
    }
  }

  createPlaceQuery += columnList + ") " + 
                      columnData + ");"

  try {
    await db.query(createPlaceQuery)
  } catch (err) {
    console.error('error running query', err)
  } 
   
}

module.exports = createPlace