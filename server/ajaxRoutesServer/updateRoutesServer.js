'use strict'
/*
 * This file receives Node.js express routes on the server that are intended
 * as AJAX calls to update data, such as adding to or changing a particular
 * organization's information
 */

const model = require('../model')
const { getTableFromForm } = require('../../joint/dataValidation/general/formsAndTable')

const express = require('express')
const router = express.Router()

const extractDataForForm = require('../utils/extractDataForForm')
const asyncMiddleware = require('../utils/asyncMiddleware')
const processFields = require('../../joint/businessLogic/general/processFields')

router.patch(
  '/update/:currentForm',
  asyncMiddleware(async (req, res) => {
    const currentForm = req.params.currentForm

    let objectInputData = extractDataForForm(currentForm, req.body)

    objectInputData = processFields(currentForm, objectInputData)

    const tableName = getTableFromForm.get(currentForm)
    const id = objectInputData.organization_id
    delete objectInputData.organization_id

    await model.updateGeneric(tableName, id, objectInputData)

    res.sendStatus(200)
  })
)

module.exports = router
