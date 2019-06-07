'use strict'

const constants = require('../../constants')
const checkVerifyPassword = require('./checkVerifyPassword')
const checkDuplicateInUniqueField = require('./checkDuplicateInUniqueField')

const checkError = async (element, value, formElements) => {
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

  const isDuplicate = await checkDuplicateInUniqueField(element, value)

  if (isDuplicate) {
    return {
      element: element,
      message: "'" + value + "' as a " + element + " is already taken"
    }
  }
}

module.exports = checkError
