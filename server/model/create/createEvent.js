'use strict'

const createGeneric = require('./createGeneric')

const createEvent = async function (objectInputData) {

  const possibleColumnList = [
    'long_title_english',
    'organization_id',
    'long_title_french',
    'short_title_english',
    'short_title_french',
    'mobile_title_english',
    'mobile_title_french',
    'description_english',
    'description_french',
    'image_link',
    'is_shown',
    'registration_website_english',
    'registration_website_french',
    'need_registration',
    'price',
    'website_english',
    'website_french',
    'family_friendly',
    'min_age',
    'max_age',
    'gender',
    'orientation',
    'race_religion',
    'only_race_religion'
  ]

  for (let col of optionalColumnList) {
    if (typeof eventDetails[col.name] !== 'undefined') {
      columnList.push(col.name)
      dataList.push(eventDetails[col.name])
    }
  }

  try {
    await createGeneric(objectInputData, possibleColumnList, 'event_groups')
  } catch (err) {
    throw Error(err)
  }

}

module.exports = createEvent
