'use strict'

const { forms } = require('./dataValidation/general/formsAndTable')

let constants = {}

/***
 * Verifications
 */

// Will automatically check in form that these elements have this min length
constants.minLengths = {}
constants.minLengths[forms.CREATE_ORGANIZATION] = {
  login: 5,
  password: 8,
  name: 5
}
constants.minLengths[forms.SEND_EMAIL] = {
  name: 3,
  email: 5,
  subject: 5,
  message: 20
}

// Forms can't be submitted without these elements
constants.mandatoryElements = {}
constants.mandatoryElements[forms.CREATE_ORGANIZATION] = ['login', 'password', 'verify_password', 'name', 'image_link']
constants.mandatoryElements[forms.SEND_EMAIL] = ['name', 'email', 'subject', 'message']

// Checks against database to ensure these elements are unique
constants.uniqueElements = {}
constants.uniqueElements[forms.CREATE_ORGANIZATION] = ['login', 'name']
constants.uniqueElements[forms.ADD_PLACE] = ['name']

/***
 * Data Modifications
 */

//Number fields - strip all non-numeric characters from these before going to database
constants.numberFields = [ 'phone', 'phone_extension']

module.exports = constants
