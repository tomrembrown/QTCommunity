'use strict'
/*
 * This file receives Node.js express routes on the server that are intended
 * as AJAX calls to read data and send it back to the client. All these are
 * read requests and use the get HTTP method. They go directly to the model
 * since for reading they don't first need to be verified with data validation
 * or business logic.
 */
 
const express = require('express')
const router = express.Router()

const model = require('../model')
const checkPassword = require('../../joint/dataValidation/server/checkPassword')
const asyncMiddleware = require('../utils/asyncMiddleware')
const { getTableFromForm } = require('../../joint/dataValidation/general/formsAndTable')
 
// Get a random quote from model/database and send back to client
router.get('/readRandomQuotation', asyncMiddleware(async (req, res) => {
  const quotationObject = await model.readRandomQuotation()
  res.send(quotationObject)
}))
 
// Get a list of values from a table for a drop-down (i.e. drop down of places)
router.get('/getValuesList/:table', asyncMiddleware(async (req, res) => {
  const valuesList = await model.getValuesList(req.params.table)
  res.send(valuesList)
}))
 
// Check if a unique element in taken
router.get('/checkElementTaken/:currentForm/:element/:value', asyncMiddleware(async (req, res) => {
  const table = getTableFromForm.get(req.params.currentForm)
  const isTaken = await model.checkElementTaken(table, req.params.element, req.params.value)
  res.send(isTaken)
}))

// Check that the login and password match what in database
router.get('/checkPassword/:login/:password', asyncMiddleware(async(req, res) => {
  const data = await checkPassword(req.params.login, req.params.password)
  res.send(data)
}))

// A list of all organization in database
router.get('/readOrganizations', asyncMiddleware(async (req, res) => {
  const organizations = await model.readOrganizations()
  res.send(organizations)
}))

module.exports = router
