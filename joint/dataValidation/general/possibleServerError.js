'use strict'

const constants = require('../../constants')

const possibleServerError = (currentForm, element, value, formElements) => {
  const formElement = element.split('__')[1]
  if (currentForm in constants.uniqueElements) {
    return constants.uniqueElements[currentForm].includes(formElement)
  } else {
    return false
  }
}

module.exports = possibleServerError
