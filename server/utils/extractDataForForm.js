'use strict'

/*
 * This file extracts only data for the current form, and removes the 
 * first part of the string that contains the form name
 */

const extractDataForForm = (currentForm, inputData) => {
  let outputData = {}
  let checkForm
  let element

  for (const [key, value] of Object.entries(inputData)) {
	let tokens = key.split("__");
	if(tokens.length == 3){
		tokens[1] = tokens[1] + "__" + tokens[2];
	}
	  
    [checkForm, element] = tokens;
    
    if (checkForm === currentForm) {
      outputData[element] = value
    }
  }

  return outputData
}

module.exports = extractDataForForm