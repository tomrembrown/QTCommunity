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
const asyncMiddleware = require('../utils/asyncMiddleware')

router.get('/deletePlace/:organizationID/:placeID', asyncMiddleware(async (req, res) => {
  await model.deletePlace(req.params.organizationID, req.params.placeID);
}));

router.get('/deleteEvent/:organizationID/:eventID', asyncMiddleware(async (req, res) => {
  await model.deleteEvent(req.params.organizationID, req.params.eventID);
}))

module.exports = router
