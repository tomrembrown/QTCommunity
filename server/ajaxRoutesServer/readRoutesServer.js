'use strict'
/*
 * readRoutesServer
 *
 * This file receives Node.js express routes on the server that are intended
 * as AJAX calls to read data and send it back to the client. All these are
 * read requests and use the get HTTP method. They go directly to the model
 * since for reading they don't first need to be verified with data validation
 * or business logic.
 *
 * Modification History
 *
 * Date             Name                Description
 * February, 2019   Thomas Brown        Initial Creation
 *
 */
 
const express = require('express')
const model = require('../model')
const router = express.Router()

const asyncMiddleware = require('../utils/asyncMiddleware')
 
// Get a random quote from model/database and send back to client
router.get('/readRandomQuotation', asyncMiddleware(async (req, res) => {
  const quotationObject = await model.readRandomQuotation()
  res.send(quotationObject)
}))
 
// Get a 
router.get('/getValuesList/:table', asyncMiddleware(async (req, res) => {
  const valuesList = await model.getValuesList(req.params.table)
  res.send(valuesList)
}))
 
router.get('/checkElementTaken/:element/:value', asyncMiddleware(async (req, res) => {
  const isTaken = await model.checkElementTaken(req.params.element, req.params.value)
  res.send(isTaken)
}))

router.get('/checkPassword/:login/:password', asyncMiddleware(async(req, res) => {
  console.log('In read routes, login: ' + req.params.login + ', password: ' + req.params.password)
  const authenticated = await model.checkPassword(req.params.login, req.params.password)
  console.log('In read route after model, authenticated: ' + authenticated)
  res.send(authenticated)
}))

module.exports = router
