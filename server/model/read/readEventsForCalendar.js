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
      `       g.long_title_english AS long_title_english, ` +
      `       g.short_title_english AS short_title_english, ` +
      `       g.mobile_title_english AS mobile_title_english, ` +
      `       g.description_english AS description_english, ` +
      `       o.name AS organization_name, ` +
      `       c.name_english AS category_name, ` +
      `       c.colour AS colour, ` +
      `       d.start_time AS start_time, ` +
      `       d.end_time AS end_time, ` +
      `       g.need_registration AS need_registration, ` +
      `       g.price AS price, ` +
      `       g.website_english AS website_english, ` +
      `       g.family_friendly AS family_friendly, ` +
      `       g.min_age AS min_age, ` +
      `       g.max_age AS max_age, ` +
      `       g.gender_female AS gender_female, ` +
      `       g.gender_male AS gender_male, ` +
      `       g.gender_transgendered AS gender_transgendered, ` +
      `       g.gender_two_spirit AS gender_two_spirit, ` +
      `       g.gender_m2f_transexual AS gender_m2f_transexual, ` +
      `       g.gender_f2m_transexual AS gender_f2m_transexual, ` +
      `       g.gender_intersex AS gender_intersex, ` +
      `       g.orientation_lesbian AS orientation_lesbian, ` +
      `       g.orientation_gay AS orientation_gay, ` +
      `       g.orientation_bisexual AS orientation_bisexual, ` +
      `       g.orientation_queer AS orientation_queer, ` +
      `       g.orientation_questioning AS orientation_questioning, ` +
      `       g.orientation_asexual AS orientation_asexual, ` +
      `       g.orientation_pansexual AS orientation_pansexual, ` +
      `       g.orientation_heterosexual AS orientation_heterosexual, ` +
      `       g.race_religion AS race_religion, ` +
      `       g.only_race_religion AS only_race_religion, ` +
      `       p.name AS place_name, ` +
      `       p.address AS place_address, ` +
      `       p.latitude AS latitude, ` +
      `       p.longitude AS longitude, ` +
      `       d.place_room AS place_room, ` +
      `       w.name AS wheelchair_accessible, ` +
      `       p.wheelchair_text AS wheelchair_text ` +
      `FROM event_groups AS g ` +
      `LEFT JOIN event_details AS d ON d.event_group_id = g.id ` +
      `LEFT JOIN organizations AS o ON g.organization_id = o.id ` +
      `LEFT JOIN categories AS c ON g.category_id = c.id ` +
      `LEFT JOIN places AS p ON d.place_id = p.id ` +
      `LEFT JOIN wheelchair_choices AS w ON p.wheelchair_choice_id = w.id ` +
      `WHERE o.is_shown=TRUE ` +
      `AND g.is_shown=TRUE ` +
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
