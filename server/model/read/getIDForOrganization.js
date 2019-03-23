'use strict'

const db = require('./../db')

const getIDForOrganization = async function(name) {
	const getIDForOrganizationTypeQuery = "SELECT id FROM organizations WHERE name = $1;"
	
	let id
	try {
		const { rows } = await db.query(getIDForOrganizationTypeQuery, [name])
		id = rows[0].id
	} catch (err) {
		console.error('error running query', err)
	} 
	return id
   
}

module.exports = getIDForOrganization