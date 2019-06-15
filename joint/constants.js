'use strict'

let constants = {}

/***
 * Verifications
 */

// Will automatically check in form that these elements have this min length
constants.minLengths = {
  login: 5
}

// Forms can't be submitted without these elements
constants.mandatoryElements = ['login', 'password', 'verify_password', 'name', 'image_link']

// Checks against database to ensure these elements are unique
constants.uniqueElements = ['login', 'name']

/***
 * Data Modifications
 */

//Number fields - strip all non-numeric characters from these before going to database
constants.numberFields = [ 'phone', 'phone_extension']

module.exports = constants
