'use strict'
/*
 * This creates an unhashed token which is a combination of a function of the current
 * date and time, plus the login and password. Then it updates the database with the
 * token, using the database to run a MD5 has on the token, as well as the current
 * date and time in the last logged field. Finally it retrieves the hashed token from
 * the database and returns it
 */

const db = require('./../db')

const updateNewLogin = async function(login, password) {
  const now = new Date()
  const token = Number.parseInt(Date.now() / 1000) + login + password

  const updateQuery =
    'UPDATE organizations SET login_token = MD5($1), last_logged_in = $2 WHERE login = $3'
  const tokenLookupQuery =
    'SELECT login_token FROM organizations WHERE login = $1'

  let loginToken = null

  try {
    await db.query(updateQuery, [token, now, login])
    const { rows } = await db.query(tokenLookupQuery, [login])
    loginToken = rows[0].login_token
  } catch (error) {
    console.log(`Error in updateNewLogin: ${error.message}`)
    throw new Error(`Error in updateNewLogin: ${error.message}`)
  }

  return loginToken
}

module.exports = updateNewLogin
