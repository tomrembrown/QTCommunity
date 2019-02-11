'use strict';
/*
 * dbInterface
 *
 * Exports an object with various methods to access (read/write) the database
 * The methods are declared here but they call files in the implementation 
 * directory which has the method definitions.
 * 
 * Modification History
 * 
 * Date             Name                Description
 * February, 2019   Thomas Brown        Initial Creation
 * 
 */

// Require all methods from implementation directory that are referred to in this interface
const getRandomQuotation = require('./other/getRandomQuotation');
const insertEvent = require('./inserts/insertEvent');
const insertPlace = require('./inserts/insertPlace');
const insertOrganization = require('./inserts/insertOrganization');

const dbInterface = {
  
  /* ******
   * Other details in database than events, places, organizations
   * ******/
  getRandomQuotation: getRandomQuotation,

  /* ******
   * Create database entries
   * ******/

  insertEvent: insertEvent,
  insertPlace: insertPlace,
  insertOrganization: insertOrganization

};

module.exports = dbInterface;