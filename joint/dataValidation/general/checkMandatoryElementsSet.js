'use strict'

const constants = require('../../constants')

const checkMandatoryElementsSet = function (currentForm, formElements) {
  let missingErrors = []

  if (constants.mandatoryElements[currentForm]) {

    constants.mandatoryElements[currentForm].forEach(element => {
      if (typeof formElements[currentForm + '__' + element] === 'undefined' || (typeof formElements[currentForm + '__' + element] == 'string' && formElements[currentForm + '__' + element].trim() == '')) {
        missingErrors.push({
          element: currentForm + '__' + element,
          message: 'This is a mandatory field'
        })
      }
    })

  }
  
	if(currentForm === 'addEvent'){
		let place_checked = [];
		let place_elements = ['place_id', 'place_room', 'place_start', 'place_end'];
		
		for(let element in formElements){
			let tokens = element.split('__');

			if(tokens.length == 3 && tokens[1].startsWith('place_') && !place_checked.includes(tokens[2])){
				for(let i in place_elements){
					if(!((currentForm + "__" + place_elements[i] + "__" + tokens[2]) in formElements) || formElements[currentForm + "__" + place_elements[i] + "__" + tokens[2]] == ''){
						missingErrors.push({
							element: currentForm + '__' + place_elements[i] + "__" + tokens[2],
							message: 'This is a mandatory field'
						});				
					}
				}
				
				place_checked.push(tokens[2]);
			}
		}
	}
	
	return missingErrors;
}

module.exports = checkMandatoryElementsSet
