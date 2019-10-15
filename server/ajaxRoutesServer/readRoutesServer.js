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
const checkSitePassword = require('../../joint/dataValidation/server/checkSitePassword')
const asyncMiddleware = require('../utils/asyncMiddleware')
const {
  getTableFromForm
} = require('../../joint/dataValidation/general/formsAndTable')
const getFormData = require('../../joint/businessLogic/server/getFormData')

// Get a random quote from model/database and send back to client
router.get(
  '/readRandomQuotation',
  asyncMiddleware(async (req, res) => {
    const quotationObject = await model.readRandomQuotation()
    res.send(quotationObject)
  })
)

// Get a list of values from a table for a drop-down (i.e. drop down of places)
router.get(
  '/getValuesList/:table',
  asyncMiddleware(async (req, res) => {
    const valuesList = await model.getValuesList(req.params.table)
    res.send(valuesList)
  })
)

// Check if a unique element in taken
router.get(
  '/checkElementTaken/:organizationID/:currentForm/:element/:value',
  asyncMiddleware(async (req, res) => {
    const table = getTableFromForm.get(req.params.currentForm)
    const isTaken = await model.checkElementTaken(
	  req.params.organizationID,
      table,
      req.params.element,
      req.params.value
    )
    res.send(isTaken)
  })
)

// Check that the login and password match what in database
router.get(
  '/checkPassword/:login/:password',
  asyncMiddleware(async (req, res) => {
    const data = await checkPassword(req.params.login, req.params.password)
    res.send(data)
  })
)

// Check that the site login and password matches what is in database
router.get(
  '/checkSiteLogin/:login/:password',
  asyncMiddleware(async (req, res) => {
    const data = await checkSitePassword(req.params.login, req.params.password)
    res.send(data)
  })
)

// A list of all organization in database
router.get(
  '/readOrganizations',
  asyncMiddleware(async (req, res) => {
    const organizations = await model.readOrganizations()
    res.send(organizations)
  })
)

// A list of all organization in database
router.get(
  '/readPlaces/:organizationID',
  asyncMiddleware(async (req, res) => {
    const places = await model.readPlaces(req.params.organizationID)
    res.send(places)
  })
)

// Read all events for a given organization
router.get(
  '/readEvents/:organizationID',
  asyncMiddleware(async (req, res) => {
    const events = await model.readEvents(req.params.organizationID)
    res.send(events)
  })
)

// Read all data for a particular form - receives the formname and the
// value for id in the database from the client - should work for any table
router.get(
  '/readForm/:formName/:id',
  asyncMiddleware(async (req, res) => {
    // This function in business logic handles everything
    const formData = await getFormData(req.params.formName, req.params.id)
    res.send(formData)
  })
)

// Read events in a given month (plus and minus a few days) for the calendar
router.get(
  '/readEventsForCalendar/:calendarStartDate/:calendarEndDate',
  asyncMiddleware(async (req, res) => {
    const events = await model.readEventsForCalendar(
      req.params.calendarStartDate,
      req.params.calendarEndDate
    )
    res.send(events)
  })
)

module.exports = router
