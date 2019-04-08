'use strict'

let constants = new Object()

constants.minLengths = {
  login: 5
}

constants.mandatoryElements = [
  'login',
  'password',
  'verify_password',
  'name'
]

module.exports = constants