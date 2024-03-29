'use strict'
/*
 * This calls a method in the model to get the encrypted password from the database
 * and then checks against the password passed in to see if it can be verified
 */

const passwordHash = require('password-hash')

const model = require('../../../server/model')

const checkPassword = async function(login, password) {
  let authenticated = false

  try {
    const tableName = 'organizations'
    const passwordEncrypted = await model.getPasswordEncrypted(login, tableName)

    if (passwordEncrypted != null) {
      authenticated = passwordHash.verify(password, passwordEncrypted)
      if (authenticated) {
        const data = await model.updateNewLogin(login, password, tableName)
        return data
      }
    }
    return null
  } catch (error) {
    console.log(`Error in checkPassword: ${error.message}`)
    throw new Error(`Error in checkPassword: ${error.message}`)
  }
}

module.exports = checkPassword
