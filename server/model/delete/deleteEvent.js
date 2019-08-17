'use strict'
/*
 * This creates an unhashed token which is a combination of a function of the current
 * date and time, plus the login and password. Then it updates the database with the
 * token, using the database to run a MD5 has on the token, as well as the current
 * date and time in the last logged field. Finally it retrieves the hashed token from
 * the database and returns it
 */

const db = require('./../db')

const deleteEvent = async function(organizationID, eventID) {
	try {
		let deleteEventsQuery = 'DELETE FROM event_groups WHERE organization_id = $1 AND id = $2;'
		let deleteEventsDetailsQuery = 'DELETE FROM event_details WHERE event_group_id = $1;'	  
		  
		await db.query(deleteEventsDetailsQuery, [eventID]);
		await db.query(deleteEventsQuery, [organizationID, eventID]);
	} 
	catch (error) {
		console.log(`Error in deleteEvent: ${error.message}`)
		throw new Error(`Error in deleteEvent: ${error.message}`)
	}
}

module.exports = deleteEvent;
