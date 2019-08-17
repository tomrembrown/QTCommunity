'use strict'

const db = require('./../db')

const readEvents = async function(organizationID) {
	let parameters = [organizationID]
	
	let getEventsQuery = 'SELECT * FROM event_groups WHERE organization_id = $1;'
	let getEventsDetailsQuery = 'SELECT * FROM event_details WHERE event_group_id = $1;'
	let events;
	
	try {
		const {rows} = await db.query(getEventsQuery, parameters);
		for(let i in rows){
			events[i] = rows[i];
			
			let detailsParameters = [rows[i].id];
			const {details} = await db.query(getEventsDetailsQuery, detailsParameters);
			
			events[i]['details'] = details;
		}
	} 
	catch (err) {
		console.error('error running query', err);
	}
	return events;
}

module.exports = readEvents;