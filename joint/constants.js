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
  login: 3,
  password: 8,
  name: 5
}
constants.minLengths[forms.SEND_EMAIL] = {
  name: 3,
  email: 5,
  subject: 5,
  message: 20
}

// Will automatically check in form that these elements are not more than this length
constants.maxLengths = {}
constants.maxLengths[forms.ADD_EVENT] = {
  short_title_english: 18,
  mobile_title_english: 12
}

// Forms can't be submitted without these elements
constants.mandatoryElements = {}
constants.mandatoryElements[forms.CREATE_ORGANIZATION] = ['login', 'password', 'verify_password', 'name', 'organization_type_id']
constants.mandatoryElements[forms.SEND_EMAIL] = ['name', 'email', 'subject', 'message']
constants.mandatoryElements[forms.ADD_EVENT] = ['long_title_english', 'short_title_english', 'mobile_title_english', 'description_english', 'place_id__0', 'place_room__0', 'place_start__0', 'place_end__0']
constants.mandatoryElements[forms.ADD_PLACE] = ['name', 'wheelchair_choice_id']

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

/***
 * For autoloading in scrolling
 */
constants.numberOrgsToLoad = 4

/***
 * List of genderIdentities - also set in database
 */
constants.genderIdentities = [
  { heading: 'Female', id: 'female' },
  { heading: 'Male', id: 'male' },
  { heading: 'Transgendered', id: 'transgendered' },
  { heading: 'Two-spirit', id: 'two_spirit' },
  { heading: 'Male to Female Transexual', id: 'm2f_transexual' },
  { heading: 'Female to Male Transexual', id: 'f2m_transexual' },
  { heading: 'Intersex', id: 'intersex' }
]

/***
 * List of sexual orientations - also set in database
 */
constants.sexualOrientations = [
  { heading: 'Lesbian', id: 'lesbian' },
  { heading: 'Gay', id: 'gay' },
  { heading: 'Bisexual', id: 'bisexual' },
  { heading: 'Queer', id: 'queer' },
  { heading: 'Questioning', id: 'questioning' },
  { heading: 'Asexual', id: 'asexual' },
  { heading: 'Pansexual', id: 'pansexual' },
  { heading: 'Heterosexual', id: 'heterosexual' }
]

module.exports = constants
