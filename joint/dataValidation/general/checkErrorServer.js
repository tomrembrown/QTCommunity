'use strict'

const constants = require('../../constants')
const checkDuplicateInUniqueField = require('./checkDuplicateInUniqueField')

const checkErrorServer = async (organizationID, currentForm, element, value, formElements) => {

  const formElement = element.split('__')[1]

  if (constants.uniqueElements[currentForm].includes(formElement)) {

    const isDuplicate = await checkDuplicateInUniqueField(organizationID, currentForm, formElement, value)

    if (isDuplicate) {
      return {
        element: element,
        message: "'" + value + "' as a " + formElement + " is already taken"
      }
    }
  }
}

module.exports = checkErrorServer
