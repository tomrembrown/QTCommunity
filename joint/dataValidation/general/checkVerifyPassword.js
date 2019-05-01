'use strict'

const checkVerifyPassword = function (formElements) {
  if (formElements.password !== formElements.verify_password) {
    return {
      element: 'verify_password',
      message: 'The passwords do not match'
    }
  } else {
    return null
  }
}

module.exports = checkVerifyPassword
