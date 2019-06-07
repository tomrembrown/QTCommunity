'use strict'

const constants = require('../../constants')
const axios = require('axios')

const checkDuplicateInUniqueField = async (element, value) => {

  if (constants.uniqueElements.indexOf(element) > -1 && value.trim()) {
    const response = await axios.get('readRoutesServer/checkElementTaken/' + element + '/' + value)
    return response.data
  } else {
    return null
  }

}

module.exports = checkDuplicateInUniqueField
