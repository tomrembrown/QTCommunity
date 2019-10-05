'use strict'

/*
 * This creates a login for the whole site in the site login table
 */

const db = require('./../db')

const createSiteLogin = async function(login, passwordEncrypted) {

  try {

    const createQuery = 
      'INSERT INTO site_access ' +
      '(login, password_encrypted) ' +
      'VALUES ($1, $2);'

    await db.query(createQuery, [login, passwordEncrypted])
  } catch (error) {
    console.log(`Error in createSiteLogin: ${error.message}`)
    throw new Error(`Error in createSiteLogin: ${error.message}`)
  }

}

module.exports = createSiteLogin