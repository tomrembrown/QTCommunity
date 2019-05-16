'use strict'

const constants = require('../../constants')
const axios = require('axios')

const checkDuplicateInUniqueField = function (element, value) {
  console.log('In checkDuplicate, element = ' + element);
  console.log(constants.uniqueElements);
  
/*  return new Promise(function(resolve, reject){
	  if(constants.uniqueElements.indexOf(element) > -1){
		  
	  }
	  else{
		  resolve(true);
	  }
  });
*/
  if (constants.uniqueElements.indexOf(element) > -1) {
    console.log('Need to check duplicate')

     axios
       .get('readRoutesServer/checkElementTaken/' + element + '/' + value)
       .then((response) => {
         console.log('checkDuplicateInUniqueField: ' + response.data);
	});
    //     if (response.data) {
    //       console.log('Returning error')
    //       return {
    //         element: element,
    //         message: 'This ' + element + ' is already taken'
    //       }
    //     }
    //     else {
    //       return null
    //     }
    //   })
  } else {
    return null
  }

  return null
}

module.exports = checkDuplicateInUniqueField
