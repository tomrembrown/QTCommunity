'use strict';

const db = require('./../db')

const getIDForEvent = async function(name, organization) {
	let parameters = [name, organization];
	
	let getIDForPlaceQuery = "SELECT id FROM event_groups WHERE long_title_english = $1 AND organization_id = $2;";	
	let id;
	
	try {
		const { rows } = await db.query(getIDForPlaceQuery, parameters);
		id = rows[0].id;
	} catch (err) {
		console.error('error running query', err);
	} 
	return id;
   
}

module.exports = getIDForEvent;