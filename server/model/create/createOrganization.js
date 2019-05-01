'use strict'

const db = require('./../db')

const createOrganization = async function (objectInputData) {
  let columnList = ['name', 'organization_type_id']
  let dataList = [objectInputData.name, objectInputData.organization_type_id]

  const optionalColumnList = [
    'description_english',
    'description_french',
    'image_link',
    'is_member',
    'is_shown',
    'login',
    'password_encrypted',
    'signup_date',
    'logged_in',
    'last_logged_in',
    'place_id',
    'place_room',
    'email',
    'display_email',
    'phone',
    'phone_extension',
    'display_phone',
    'website_english',
    'website_french',
    'display_website',
    'facebook',
    'display_facebook',
    'twitter',
    'display_twitter',
    'linked_in',
    'display_linked_in',
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

  let createOrganizationQuery =
    'INSERT INTO organizations (' +
    columnList.join(', ') +
    ') VALUES (' +
    parameters.join() +
    ');'

  try {
    await db.query(createOrganizationQuery, dataList)
    console.log('Organization inserted correctly')
  } catch (err) {
    console.error('error running query', err)
  }
}

module.exports = createOrganization
