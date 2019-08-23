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
  // Trim all fields if string
  for (let field in objectInputData) {
    if (objectInputData.hasOwnProperty(field)) {
      if (typeof objectInputData[field] === 'string')
        objectInputData[field] = objectInputData[field].trim()
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
  //  if (currentForm === forms.CREATE_ORGANIZATION) {
  if (
    typeof objectInputData.gender_all != 'undefined' ||
    typeof objectInputData.orientation_all != 'undefined' ||
    typeof objectInputData.verify_password != 'undefined' ||
    typeof objectInputData.race_religion_targetted != 'undefined'
  ) {
    if (objectInputData.gender_all != null) {
      delete objectInputData.gender_all
    }
    if (objectInputData.orientation_all != null) {
      delete objectInputData.orientation_all
    }
    if (objectInputData.verify_password != null) {
      delete objectInputData.verify_password
    }
    if (objectInputData.race_religion_targetted != null) {
      delete objectInputData.race_religion_targetted
    }
  }

  // Remove all non-number characters from number fields like phone number
  for (const fieldName of constants.numberFields) {
    if (
      fieldName in objectInputData &&
      typeof objectInputData[fieldName] === 'string'
    ) {
      console.log('fieldName: ' + fieldName)
      objectInputData[fieldName] = objectInputData[fieldName].replace(/\D/g, '')
    }
  }

  //separate out places/time data
  if (currentForm == forms.ADD_EVENT) {
    objectInputData['placetime'] = []

    let translationTable = {
      place_start: 'start_time',
      place_end: 'end_time'
    }

    for (let id in objectInputData) {
      let tokens = id.split('__')
      if (tokens.length == 2 && tokens[0].startsWith('place_')) {
        if (typeof objectInputData['placetime'][tokens[1]] == 'undefined') {
          objectInputData['placetime'][tokens[1]] = {}
        }

        tokens[0] = translationTable[tokens[0]] || tokens[0]

        objectInputData['placetime'][tokens[1]][tokens[0]] = objectInputData[id]
        delete objectInputData[id]
      }
    }
  }

  return objectInputData
}

module.exports = processFields
