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

  let objectInputData = extractDataForForm(currentForm, req.body)  
  let password
  let login

  if (currentForm === forms.CREATE_ORGANIZATION) {
    password = objectInputData.password
    login = objectInputData.login
  }

  objectInputData = processFields(currentForm, objectInputData)

  let holdover = null;
  if (currentForm == forms.ADD_EVENT){
	  holdover = objectInputData.placetime;
	  delete objectInputData.placetime;
  }

  const tableName = getTableFromForm.get(currentForm)
  let rowID = await model.createGenericFromClient(tableName, objectInputData)

  if(holdover && currentForm == forms.ADD_EVENT){
	 for(let i in holdover){
		holdover[i]['event_group_id'] = rowID;
 		model.createGenericFromClient('event_details', holdover[i]);	    
	 } 
  }
  
  res.json(holdover);

  if (currentForm === forms.CREATE_ORGANIZATION) {
    const data = await model.updateNewLogin(login, password)
    res.json(data)
  } else {
    res.sendStatus(200)
  }

}))

module.exports = router
