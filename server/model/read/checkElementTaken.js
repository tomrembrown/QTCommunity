'use strict'

const db = require('./../db')

const checkElementTaken = async (organizationID, table, element, value) => {
  var args = [value];
	
  var suffix = '';
  if(table == 'places' && element == 'name'){
	  suffix = 'AND organization_id = $2';
	  args.push(organizationID);
  }
	
  const checkElementTakenQuery =
    'SELECT id FROM ' + table + ' WHERE ' + element + ' = $1' + (suffix ? ' ' + suffix : '') + ';';

  try {
    const response = await db.query(checkElementTakenQuery, args)
    return !(response.rowCount === 0)
  } catch (error) {
    console.error(`Error in checkElementTaken: ${error.message}`)
    throw new Error(`Error in checkElementTaken: ${error.message}`)
  }
}

module.exports = checkElementTaken
