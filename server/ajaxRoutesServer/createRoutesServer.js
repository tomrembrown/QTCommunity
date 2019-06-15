'use strict'

const express = require('express')
const model = require('../model')
const router = express.Router()

const asyncMiddleware = require('../utils/asyncMiddleware')
const createOrganizationProcessFields = require('../../joint/businessLogic/general/createOrganizationProcessFields')

router.post('/createOrganization', asyncMiddleware(async (req, res) => {

  let objectInputData = req.body
  objectInputData = createOrganizationProcessFields(objectInputData )

  await model.createOrganization(objectInputData)
  console.log('About to send OK')
  res.json({isError: false, createdOrganization: true})

}))

module.exports = router
