'use strict'
/*
 * This just gets the encrypted password from the database for a particular
 * organization, given their login - or returns null if that login doesn't exist
 */

const db = require('./../db')

const getPasswordEncrypted = async function(login, tableName) {
  const getPasswordEncryptedQuery =
    `SELECT password_encrypted FROM ${tableName} WHERE login = $1`

  let passwordEncrypted = null

  try {
    const { rows } = await db.query(getPasswordEncryptedQuery, [login])

    if (rows[0] == null) {
      passwordEncrypted = null
    } else {
      passwordEncrypted = rows[0].password_encrypted
    }
  } catch (error) {
    console.log(`Error in getPasswordEncrypted: ${error.message}`)
    throw new Error(`Error in getPasswordEncrypted: ${error.message}`)
  }

  return passwordEncrypted
}

module.exports = getPasswordEncrypted
