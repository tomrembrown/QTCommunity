'use strict'

const constants = require('../../constants')
const checkVerifyPassword = require('./checkVerifyPassword')
const checkDuplicateInUniqueField = require('./checkDuplicateInUniqueField')

const checkError = function (element, value, formElements) {
  // Less than min length error
  if (
    element in constants.minLengths &&
    value.length < constants.minLengths[element]
  ) {
    return {
      element: element,
      message:
        'The value for ' +
        element +
        ' must be at least ' +
        constants.minLengths[element] +
        ' characters long'
    }
  }

  // Verify password error
  if (element === 'verify_password') {
    const verifyError = checkVerifyPassword(formElements)
    if (verifyError !== null) return verifyError
  }
  
  checkDuplicateInUniqueField(element, value);

  // Unique field already taken
/*  checkDuplicateInUniqueField(element, value).then(duplicateError => {
    console.log('Duplicate error is: ')
    console.log(duplicateError)
    return duplicateError
  })
 */
}

module.exports = checkError
