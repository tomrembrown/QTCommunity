'use strict';
const db = require('./../db');

const createOrganization = async function(objectInputData) {

  let createOrganizationQuery = "INSERT INTO organizations "

  let columnList = "(name, organization_type_id"
  let columnData = "VALUES ('" + objectInputData.name + "', " + 
                              objectInputData.organization_type_id

  const optionalColumnList = [
    { name: "description_english", useQuotes: true },
    { name: "description_french", useQuotes: true },
    { name: "image_link", useQuotes: true },
    { name: "is_member", useQuotes: false },
    { name: "is_shown", useQuotes: false },
    { name: "login", useQuotes: true },
    { name: "password_encrypted", useQuotes: true },
    { name: "signup_date", useQuotes: true },
    { name: "logged_in", useQuotes: false },
    { name: "last_logged_in", useQuotes: true },
    { name: "place_id", useQuotes: false },
    { name: "place_room", useQuotes: true },
    { name: "email", useQuotes: true },
    { name: "display_email", useQuotes: false },
    { name: "phone", useQuotes: false },
    { name: "phone_extension", useQuotes: false },
    { name: "display_phone", useQuotes: false },
    { name: "website_english", useQuotes: true },
    { name: "website_french", useQuotes: true },
    { name: "display_website", useQuotes: false },
    { name: "facebook", useQuotes: true },
    { name: "display_facebook", useQuotes: false },
    { name: "twitter", useQuotes: true },
    { name: "display_twitter", useQuotes: false },
    { name: "linked_in", useQuotes: true },
    { name: "display_linked_in", useQuotes: false },
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

  createOrganizationQuery += columnList + ") " + columnData + ");"

  try {
    await db.query(createOrganizationQuery)
    console.log('Organization inserted correctly')
  } catch (err) {
    console.error('error running query', err)
  } 
   
}

module.exports = createOrganization