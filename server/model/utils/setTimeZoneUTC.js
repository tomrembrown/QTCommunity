'use strict'

/* 
 * This subroutine sets the system time to UTC so that the time
 * data can be exported from postgresql without a time shift to 
 * accommodate the local time
 */

const db = require('./../db')

const setTimeZoneUTC = async function () {
  try {
    const setTimeZoneQuery = "SET TIME ZONE 'UTC';"
    await db.query(setTimeZoneQuery)
  } catch (error) {
    console.log(`Error setting default time zone ${error.message}`)
  }
}

module.exports = setTimeZoneUTC