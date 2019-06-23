'use strict'
/*
 * This file receives Node.js express routes on the server that are intended
 * as AJAX calls to create data, such as organizations and events. All these are
 * create requests and use the post HTTP method. 
 */

const express = require('express')
const model = require('../model')
const router = express.Router()

const asyncMiddleware = require('../utils/asyncMiddleware')
const createOrganizationProcessFields = require('../../joint/businessLogic/general/createOrganizationProcessFields')

router.post('/createOrganization', asyncMiddleware(async (req, res) => {

  let objectInputData = req.body
  const password = objectInputData.password
  const login = objectInputData.login
  objectInputData = createOrganizationProcessFields(objectInputData)

  await model.createOrganization(objectInputData)

  const loginToken = await model.updateNewLogin(login, password)

  res.json({loginToken: loginToken})

}))

module.exports = router
