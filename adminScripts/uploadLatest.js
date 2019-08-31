'use strict'

/*
 * Upload the latest data from organizations and places table. This is run
 * node uploadLatest.js
 * It uses three files:
 * ORGANIZATIONS_LATEST.dat
 * PLACES_LATEST.dat
 * ORG_PLACE_JOIN_LATEST.dat
 */

const path = require('path')
const uploadTableFunction = require('./uploadTableFunction')
const updateTableFunction = require('./updateTableFunction')
const model = require('../server/model')

const runAll = async () => {
  await uploadTableFunction(path.join(__dirname,'/ORGANIZATIONS_LATEST.dat'),'organizations')
  await uploadTableFunction(path.join(__dirname,'/PLACES_LATEST.dat'),'places')
  await updateTableFunction(path.join(__dirname,'/ORG_PLACE_JOIN_LATEST.dat'),'organizations')
  model.close()
}

runAll()

