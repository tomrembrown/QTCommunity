'use strict'

const db = require('./../db')

const readEvents = async function(organizationID) {
	let parameters = [organizationID]
	
	let getEventsQuery = 		'SELECT * FROM event_groups WHERE organization_id = $1;';
	let getEventsDetailsQuery = 'SELECT * FROM event_details WHERE event_group_id = $1;';
	let events = [];
	
	try {
		let getPlacesQuery = 	'SELECT * FROM places WHERE organization_id = $1;';
		let placesResult = 		await db.query(getPlacesQuery, parameters);
		
		let places = [];
		for(let i in placesResult.rows){
			places[placesResult.rows[i].id] = placesResult.rows[i];
		}
		
		
		const {rows} = await db.query(getEventsQuery, parameters);	
				
		for(let i in rows){
			let detailsParameters = [rows[i].id];
			const result = await db.query(getEventsDetailsQuery, detailsParameters);
			
			let rowAt = rows[i];
			rowAt['details'] = result.rows;
			
			for(let j in rowAt['details']){
				rowAt['details'][j]['place_name'] = 	places[rowAt['details'][j]['place_id']]['name'];
				rowAt['details'][j]['place_address'] = 	places[rowAt['details'][j]['place_id']]['address'];
			}
			
			events.push(rowAt);
		}
	} 
	catch (err) {
		console.error('error running query', err);
	}
	return events;
}

module.exports = readEvents;