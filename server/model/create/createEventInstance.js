'use strict'

const createGeneric = require('./createGeneric')

const createEvent = async function(objectInputData) {
  const optionalColumnList = [
    'event_group_id',
    'place_id',
    'start_time',
    'end_time',
    'place_room'
  ]

  try {
    await createGeneric(objectInputData, possibleColumnList, 'event_details')
  } catch (err) {
    throw Error(err)
  }
}

module.exports = createEventInstance
