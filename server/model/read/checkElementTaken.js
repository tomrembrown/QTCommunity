'use strict'

const db = require('./../db')

const checkElementTaken = function(element, value){
	return new Promise(function(resolve, reject){
		const checkElementTakenQuery =
			'SELECT id ' +
			'FROM organizations ' +
			'WHERE ' +
			element +
			" = '" +
			value +
			"';"		
		console.log('checkElementTakenQuery: ' + checkElementTakenQuery) 	
		
		let isTaken = false;
		db.query(checkElementTakenQuery).then(function(rows){
			console.log('Rows: ' + rows)
			isTaken = !(rows.length === 0);			
			return resolve(isTaken);
		}).catch(function(err){
			console.error('error running query', err);
			reject(err);
		});
	});
}

/*const checkElementTaken = async function (element, value) {
  const checkElementTakenQuery =
    'SELECT id ' +
    'FROM organizations ' +
    'WHERE ' +
    element +
    " = '" +
    value +
    "';"

  console.log('checkElementTakenQuery: ' + checkElementTakenQuery)

  let isTaken

  try {
    const { rows } = await db.query(checkElementTakenQuery)
    console.log('Rows: ' + rows)
    if (rows.length === 0) {
      isTaken = false
    } else {
      isTaken = true
    }
  } catch (err) {
    console.error('error running query', err)
  }
  return isTaken
}*/

module.exports = checkElementTaken
