'use strict'

const passwordHash = require('password-hash')
const constants = require('../../constants')

const createOrganizationProcessFields = objectInputData => {
  // Trim all fields and remove any that are empty
  for (let field in objectInputData) {
    if (objectInputData.hasOwnProperty(field)) {
      if (typeof objectInputData[field] === 'string')
        objectInputData[field] = objectInputData[field].trim()

      if (objectInputData[field] === '') {
        delete objectInputData[field]
      }
    }
  }

  // So this organization is shown
  objectInputData.is_shown = 'TRUE'

  // Remove fields on form, but not in database
  if (objectInputData.gender_all != null) { delete objectInputData.gender_all }
  if (objectInputData.orientation_all != null) { delete objectInputData.orientation_all }
  if (objectInputData.verify_password != null) { delete objectInputData.verify_password }

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
