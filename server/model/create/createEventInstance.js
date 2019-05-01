'use strict'

const db = require('./../db')
const readEvent = require('./../read/getIDForEvent')

const createEvent = async function (eventDetails) {
  let columnList = ['event_group_id', 'place_id', 'start_time', 'end_time']
  let dataList = [
    eventDetails.event_group_id,
    eventDetails.place_id,
    eventDetails.start_time,
    eventDetails.end_time
  ]

  const optionalColumnList = ['place_room']

  for (let col of optionalColumnList) {
    if (typeof eventDetails[col.name] !== 'undefined') {
      columnList.push(col.name)
      dataList.push(eventDetails[col.name])
    }
  }

  let parameters = Array.from(
    [...Array(columnList.length + 1).keys()],
    x => '$' + x
  )
  parameters.shift()

  let createPlaceQuery =
    'INSERT INTO event_details (' +
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

module.exports = createEvent
