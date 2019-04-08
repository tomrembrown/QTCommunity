'use strict'
const constants = require('../../constants')
const checkVerifyPassword = require('./checkVerifyPassword')
const checkDuplicateInUniqueField = require('./checkDuplicateInUniqueField')

const checkError = function(element, value, formElements) {
  
  // Less than min length error
  if (element in constants.minLengths && 
      value.length < constants.minLengths[element]) {
    return {
      element: element,
      message: 'The value for ' + element + ' must be at least ' + constants.minLengths[element] + ' characters long'
    }
  }

  // Verify password error
  if (payload.element === 'verify_password') {
    const verifyError = checkVerifyPassword(formElements)
    if (verifyError !== null) return verifyError
  }

  // Unique field already taken
  const duplicateError = checkDuplicateInUniqueField(element, value)
  if (duplicateError !== null) return duplicateError

  return null
}

module.exports = checkError