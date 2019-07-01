'use strict'
/*
 * Exports an object with various methods to perform CRUD operations on the database
 * The methods are declared here but they call files in the create, read, update,
 * and delete directories which have the method definitions.
 */

// Require all methods from CRUD directories that are referred to in this interface

// Create
const createGenericFromClient = require('./create/createGenericFromClient')
const createGeneric = require('./create/createGeneric')

// Read
const readRandomQuotation = require('./read/readRandomQuotation')
const getIDForPlace = require('./read/getIDForPlace')
const getIDForOrganization = require('./read/getIDForOrganization')
const getIDForOrganizationType = require('./read/getIDForOrganizationType')
const getValuesList = require('./read/getValuesList')
const getMandatoryColumns = require('./read/getMandatoryColumns')
const getColumnDefaults = require('./read/getColumnDefaults')
const getPasswordEncrypted = require('./read/getPasswordEncrypted')
const checkElementTaken = require('./read/checkElementTaken')
const readOrganizations = require('./read/readOrganizations')

// Update
const updateNewLogin = require('./update/updateNewLogin')

// Database utility functions
const close = require('./final/close')

// Object to export
const model = {
  /* ******
   * Create
   * ******/
  createGenericFromClient: createGenericFromClient,
  createGeneric: createGeneric,

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
  getMandatoryColumns: getMandatoryColumns,
  getColumnDefaults: getColumnDefaults,
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
