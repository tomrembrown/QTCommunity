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

// Get a random quote from model/database and send back to client
router.get('/readRandomQuotation', (req, res) => {
  model.readRandomQuotation().then(quotationObject => {
    res.send(quotationObject)
  })
})

router.get('/getValuesList/:table', (req, res) => {
  model.getValuesList(req.params.table).then(valuesList => {
    res.send(valuesList)
  })
})

router.get('/checkElementTaken/:element/:value', (req, res) => {
  console.log('In check Element, element = ' + req.params.element,
    ' value = ' + req.params.value)

  model.checkElementTaken(req.params.element, req.params.value).then(isTaken => {
    console.log('In call back in checkElementTaken, taken = ' + isTaken)
    res.send(isTaken)
  })
})

module.exports = router
