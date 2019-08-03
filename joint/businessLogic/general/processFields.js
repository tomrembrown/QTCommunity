'use strict'

/*
 * This function does necessary processing for data input on fields
 * coming from the client - like trimming fields and removing data,
 * or encrypting passwords, or removing fields that aren't actual
 * database fields, but used for convenience on user forms
 */

const passwordHash = require('password-hash')
const constants = require('../../constants')
const { forms } = require('../../dataValidation/general/formsAndTable')

const processFields = (currentForm, objectInputData) => {
  
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

  if (currentForm === forms.CREATE_ORGANIZATION) {

    // So this organization is shown
    objectInputData.is_shown = 'TRUE'
    // Convert password field to password encrypted
    objectInputData.password_encrypted = passwordHash.generate(
      objectInputData.password
    )
    delete objectInputData.password

  }

  // Remove fields on form, but not in database
  if (currentForm === forms.CREATE_ORGANIZATION) {
    if (objectInputData.gender_all != null) { delete objectInputData.gender_all }
    if (objectInputData.orientation_all != null) { delete objectInputData.orientation_all }
    if (objectInputData.verify_password != null) { delete objectInputData.verify_password }
  }

  // Remove all non-number characters from number fields like phone number
  for (const fieldName of constants.numberFields) {
    if (objectInputData[fieldName]) {
      objectInputData[fieldName] = objectInputData[fieldName].replace(/\D/g, '')
    }
  }

  return objectInputData
}

module.exports = processFields
