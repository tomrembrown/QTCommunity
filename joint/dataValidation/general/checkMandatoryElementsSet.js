'use strict'
const constants = require('../../constants')

const checkMandatoryElementsSet = function(formElements) {
  let missingErrors = []

  constants.mandatoryElements.forEach((element) => {
    if (typeof formElements[element] === 'undefined') {
      missingErrors.push({
        element: element,
        message: 'This is a mandatory field'
      })
    }
  })

  return missingErrors
}

module.exports = checkMandatoryElementsSet