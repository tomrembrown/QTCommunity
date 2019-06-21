'use strict'
/*
 * Exports an object with various methods to perform CRUD operations on the database
 * The methods are declared here but they call files in the create, read, update,
 * and delete directories which have the method definitions.
 */

// Require all methods from CRUD directories that are referred to in this interface
const createEvent = require('./create/createEvent')
const createPlace = require('./create/createPlace')
const createOrganization = require('./create/createOrganization')

const readRandomQuotation = require('./read/readRandomQuotation')
const getIDForPlace = require('./read/getIDForPlace')
const getIDForOrganization = require('./read/getIDForOrganization')
const getIDForOrganizationType = require('./read/getIDForOrganizationType')
const getValuesList = require('./read/getValuesList')
const getPasswordEncrypted = require('./read/getPasswordEncrypted')
const checkElementTaken = require('./read/checkElementTaken')
const readOrganizations = require('./read/readOrganizations')

const updateNewLogin = require('./update/updateNewLogin')

const close = require('./final/close')

const model = {
  /* ******
   * Create
   * ******/
  createEvent: createEvent,
  createPlace: createPlace,
  createOrganization: createOrganization,

  /* ******
   * Read
   * ******/
  // Read general data
  readRandomQuotation: readRandomQuotation,

  // Lookup specific information
  getIDForPlace: getIDForPlace,
  getIDForOrganization: getIDForOrganization,
  getIDForOrganizationType: getIDForOrganizationType,
  getValuesList: getValuesList,
  getPasswordEncrypted: getPasswordEncrypted,

  // Checks
  checkElementTaken: checkElementTaken,

  // Lookup whole tables
  readOrganizations: readOrganizations,

  /* ******
   * Update
   * ******/
  updateNewLogin: updateNewLogin,

  /* ******
   * Database utility functions
   * ******/
  close: close
}

module.exports = model
