'use strict'

let constants = {}

constants.minLengths = {
  login: 5
}

constants.mandatoryElements = [
  'login',
  'password',
  'verify_password',
  'name'
]

constants.uniqueElements = [
  'login',
  'name'
]

module.exports = constants
