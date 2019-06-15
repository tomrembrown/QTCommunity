'use strict'

const passwordHash = require('password-hash')
const constants = require('../../constants')

const createOrganizationProcessFields = objectInputData => {
  
  // Convert password field to password encrypted
  objectInputData.password_encrypted = passwordHash.generate(
    objectInputData.password
  )
  delete objectInputData.password

  // Remove all non-number characters from number fields like phone number
  for (const fieldName of constants.numberFields) {
    if (objectInputData[fieldName]) {
      objectInputData[fieldName] = objectInputData[fieldName].replace(/\D/g, '')
    }
  }

  return objectInputData

}

module.exports = createOrganizationProcessFields
