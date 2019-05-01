'use strict'

const express = require('express')
const model = require('../model')
const router = express.Router()
const passwordHash = require('password-hash')

router.post('/createOrganization', (req, res) => {
  // Hash password in new field, then remove regular password
  let objectInputData = req.body
  objectInputData.password_encrypted = passwordHash.generate(objectInputData.password)
  delete (objectInputData.password)

  model.createOrganization(objectInputData).then(() => {
    model.close()
    res.send('Success')
  })
})

module.exports = router
