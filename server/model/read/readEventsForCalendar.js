'use strict'
/*
 * This gets the events for the calendar - all events for all organizations
 * from a certain start date to a certain end date
 */

const db = require('./../db')

const readEventsForCalendar = async function(
  calendarStartDate,
  calendarEndDate
) {
  let events = []

  try {
    // Check calendarStartDate & calendarEndDate in correct format to avoid hacking
    const dateCheck = new RegExp(/^\d\d\d\d-\d\d-\d\d$/)
    if (
      !dateCheck.test(calendarStartDate) ||
      !dateCheck.test(calendarEndDate)
    ) {
      throw new Error('Invalid start or end date')
    }

    const readCalendarEventsQuery =
      `SELECT d.id AS id, ` +
      `       g.short_title_english AS short_title_english, ` +
      `       d.start_time AS start_time, ` +
      `       d.end_time AS end_time ` +
      `FROM event_groups AS g ` +
      `LEFT JOIN event_details AS d ON d.event_group_id = g.id ` +
      `LEFT JOIN organizations AS o ON g.organization_id = o.id ` +
      `WHERE o.is_shown=TRUE ` +
      `AND d.end_time >= '${calendarStartDate}'::date ` +
      `AND d.start_time < ('${calendarEndDate}'::date + '1 day'::interval);`

    const { rows } = await db.query(readCalendarEventsQuery)

    events = rows

  } catch (error) {
    console.log(`Error in readEventsForCalendar: ${error.message}`)
    throw new Error(`Error in readEventsForCalendar: ${error.message}`)
  }

  return events
}

module.exports = readEventsForCalendar
