'use strict';
const db = require('./../db');

const createPlace = async function(objectInputData) {

  let createPlaceQuery = "INSERT INTO places "

  let columnList = "(name, address"
  let columnData = "VALUES ('" + objectInputData.name 
                               + "', '" + objectInputData.address + "'"

  const optionalColumnList = [
    { name: "family_friendly", isText: false },
    { name: "min_age", isText: false },
    { name: "max_age", isText: false },
    { name: "gender_female", isText: false },
    { name: "gender_male", isText: false },
    { name: "gender_transgendered", isText: false },
    { name: "gender_two_spirit", isText: false },
    { name: "gender_m2f_transexual", isText: false },
    { name: "gender_f2m_transexual", isText: false },
    { name: "gender_intersex", isText: false },
    { name: "orientation_lesbian", isText: false },
    { name: "orientation_gay", isText: false },
    { name: "orientation_bisexual", isText: false },
    { name: "orientation_queer", isText: false },
    { name: "orientation_questioning", isText: false },
    { name: "orientation_asexual", isText: false },
    { name: "orientation_pansexual", isText: false },
    { name: "orientation_heterosexual", isText: false },
    { name: "race_religion", isText: true },
    { name: "only_race_religion", isText: false }
  ]
 
  for (let col of optionalColumnList) {
    if (typeof objectInputData[col.name] !== 'undefined') {
      columnList += ", " + col.name;

      columnData += ", " + (col.isText ? "'" : "")
      columnData += objectInputData[col.name]
      columnData += (col.isText ? "'" : "")
    }
  }

  createPlaceQuery += columnList + ") " + 
                      columnData + ");"

  try {
    await db.query(createPlaceQuery)
    console.log('Place inserted correctly')
  } catch (err) {
    console.error('error running query', err)
  } 
   
}

module.exports = createPlace