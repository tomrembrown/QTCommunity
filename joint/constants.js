'use strict'

const { forms } = require('./dataValidation/general/formsAndTable')

let constants = {}

// General constants
constants.databaseName = 'queer_toronto';

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
constants.mandatoryElements[forms.CREATE_ORGANIZATION] = ['login', 'password', 'verify_password', 'name', 'image_link', 'organization_type_id']
constants.mandatoryElements[forms.SEND_EMAIL] = ['name', 'email', 'subject', 'message']
constants.mandatoryElements[forms.ADD_EVENT] = ['long_title_english', 'short_title_english', 'mobile_title_english', 'description_english', 'place_id__0', 'place_room__0', 'place_start__0', 'place_end__0']

// Checks against database to ensure these elements are unique
constants.uniqueElements = {}
constants.uniqueElements[forms.CREATE_ORGANIZATION] = ['login', 'name']
constants.uniqueElements[forms.ADD_PLACE] = ['name']

/***
 * Data Modifications
 */

//Number fields - strip all non-numeric characters from these before going to database
constants.numberFields = [ 'phone', 'phone_extension']

// Columns that we don't need to get for loading form data
constants.columnsToRemove = {}
constants.columnsToRemove[forms.EDIT_ORGANIZATION] = 
  ['id', 'description_french', 'is_member', 'is_shown', 'login', 'password_encrypted',
   'login_token', 'signup_date', 'logged_in', 'last_logged_in', 'website_french']

/***
 * For uploading image
 */
constants.maxSizeNumber = 1024 * 1024
constants.maxSizeText = '1 MB'
constants.imageURLStart = '/img/organizationLogos/'


module.exports = constants
