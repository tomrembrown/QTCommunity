'use strict'
/*
 * This file receives Node.js express routes on the server that are intended
 * as AJAX calls to create data, such as organizations and events. All these are
 * create requests and use the post HTTP method. 
 */

const model = require('../model')
const { forms, getTableFromForm } = require('../../joint/dataValidation/general/formsAndTable')

const express = require('express')
const router = express.Router()

const extractDataForForm = require('../utils/extractDataForForm')
const asyncMiddleware = require('../utils/asyncMiddleware')
const processFields = require('../../joint/businessLogic/general/processFields')

router.post('/create/:currentForm', asyncMiddleware(async (req, res) => {

  const currentForm = req.params.currentForm

  let objectInputData = extractDataForForm(currentForm,req.body)
  let password
  let login

  if (currentForm === forms.CREATE_ORGANIZATION) {
    password = objectInputData.password
    login = objectInputData.login
  }

  objectInputData = processFields(currentForm,objectInputData)

  const tableName = getTableFromForm.get(currentForm)
  await model.createGenericFromClient(tableName, objectInputData)

  if (currentForm === forms.CREATE_ORGANIZATION) {
    const data = await model.updateNewLogin(login, password)
    res.json(data)
  } else {
    res.sendStatus(200)
  }

}))

module.exports = router
