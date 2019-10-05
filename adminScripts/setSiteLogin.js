'use strict'

/*
 * This subroutine enters the site login and password into the 
 * database. Note that this is a single login and password for the
 * whole site. It is only temporary. Once the site is more stable
 * and the data has been vetted it will be removed and the general
 * public will be able to see the site.
 */

const passwordHash = require('password-hash')
const model = require('../server/model')

const LOGIN = 'sitedemo'
const PASSWORD = 'Communities123*'

const runAll = async () => {
  let passwordEncrypted = passwordHash.generate(PASSWORD)
  await model.createSiteLogin(LOGIN, passwordEncrypted)
  model.close()
  console.log('All done!')
}

runAll()