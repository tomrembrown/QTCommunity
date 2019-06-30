'use strict'
/*
 * This file receives Node.js express routes on the server that are intended
 * as AJAX calls to create data, such as organizations and events. All these are
 * create requests and use the post HTTP method. 
 */

const model = require('../model')
const { forms } = require('../../joint/dataValidation/general/formsAndTable')

const express = require('express')
const router = express.Router()

const extractDataForForm = require('../utils/extractDataForForm')
const asyncMiddleware = require('../utils/asyncMiddleware')
const createOrganizationProcessFields = require('../../joint/businessLogic/general/createOrganizationProcessFields')

router.post('/create/:currentForm', asyncMiddleware(async (req, res) => {

  const currentForm = req.params.currentForm

  let objectInputData = extractDataForForm(currentForm,req.body)

  if (currentForm === forms.CREATE_ORGANIZATION) {

    const password = objectInputData.password
    const login = objectInputData.login
    objectInputData = createOrganizationProcessFields(objectInputData)

    await model.createOrganization(objectInputData)

    const data = await model.updateNewLogin(login, password)

    res.json(data)

  }

}))

module.exports = router
