'use strict'

const db = require('./../db')
const readEvent = require('./../read/getIDForEvent')
const writeEventInstance = require('./../create/createEventInstance')

const createEvent = async function (eventDetails) {
  let columnList = ['long_title_english', 'organization_id']
  let dataList = [eventDetails.long_title_english, eventDetails.organization_id]

  const optionalColumnList = [
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

  let parameters = Array.from([...Array(columnList.length + 1).keys()], x => '$' + x)
  parameters.shift()

  let createPlaceQuery = 'INSERT INTO event_groups (' + columnList.join(', ') + ') VALUES (' + parameters.join() + ');'

  try {
    await db.query(createPlaceQuery, dataList)
    let eventID = await readEvent(eventDetails.long_title_english, eventDetails.organization_id)

    for (let i in eventDetails.instances) {
      let payload = eventDetails.instances[i]
      payload.event_group_id = eventID
      writeEventInstance(payload).then(() => {}).catch((err) => { console.log(err) })
    }
  } catch (err) {
    console.error('error running query', err)
  }
}

module.exports = createEvent
