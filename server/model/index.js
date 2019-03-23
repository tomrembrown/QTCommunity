'use strict';
/*
 * model
 *
 * Exports an object with various methods to perform CRUD operations on the database
 * The methods are declared here but they call files in the create, read, update,
 * and delete directories which have the method definitions.
 * 
 * Modification History
 * 
 * Date             Name                Description
 * February, 2019   Thomas Brown        Initial Creation
 * 
 */

// Require all methods from CRUD directories that are referred to in this interface
const readRandomQuotation = require('./read/readRandomQuotation')
const getIDForPlace = require('./read/getIDForPlace')
const createEvent = require('./create/createEvent')
const createPlace = require('./create/createPlace')
const createOrganization = require('./create/createOrganization')
const close = require('./final/close')

const model = {
  
  /* ******
   * Other details in database than events, places, organizations
   * ******/
  readRandomQuotation: readRandomQuotation,

  /* ******
   * Lookup specific information
   * ******/
  getIDForPlace: getIDForPlace,

  /* ******
   * Create database entries
   * ******/
  createEvent: createEvent,
  createPlace: createPlace,
  createOrganization: createOrganization,

  /* ******
   * Create database entries
   * ******/
  close: close

}

module.exports = model