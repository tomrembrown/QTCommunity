'use strict'

const constants = require('../../constants')
const axios = require('axios')

const checkDuplicateInUniqueField = function (element, value) {
  console.log('In checkDuplicate, element = ' + element)
  console.log(constants.uniqueElements)

  if (constants.uniqueElements.indexOf(element) > -1) {
    console.log('Need to check duplicate')

    // axios
    //   .get('readRoutesServer/checkElementTaken/' + element + '/' + value)
    //   .then((response) => {
    //     console.log('Response data')
    //     console.log(response.data)
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
