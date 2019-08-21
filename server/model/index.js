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
const readPlaces = require('./read/readPlaces')
const readPlacesAll = require('./read/readPlacesAll')
const getColumnsForRow = require('./read/getColumnsForRow')

// Update
const insertPlaceIfNecessary = require('./update/insertPlaceIfNecessary')
const updateNewLogin = require('./update/updateNewLogin')
const updateGeneric = require('./update/updateGeneric')
const updateGenericMany = require('./update/updateGenericMany')

// Delete
const deletePlace = require('./delete/deletePlace')

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
  getColumnsForRow: getColumnsForRow,

  // Checks
  checkElementTaken: checkElementTaken,

  // Lookup whole tables
  readOrganizations: readOrganizations,
  readPlaces: readPlaces,
  readPlacesAll: readPlacesAll,

  /* ******
   * Update
   * ******/
  insertPlaceIfNecessary: insertPlaceIfNecessary,
  updateNewLogin: updateNewLogin,
  updateGeneric: updateGeneric,
  updateGenericMany: updateGenericMany,

  /* ******
   * Delete
   * ******/
  deletePlace: deletePlace,

  /* ******
   * Database utility functions
   * ******/
  close: close
}

module.exports = model
