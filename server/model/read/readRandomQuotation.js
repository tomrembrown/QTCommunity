'use strict';
/*
 * readRandomQuotation
 *
 * Makes an SQL query to quotations table in database to extract a random quotation 
 * object with a quotation and person and the object properties
 * 
 * Modification History
 * 
 * Date             Name                Description
 * February, 2019   Thomas Brown        Initial Creation
 * 
 */

const db = require('./../db');

const readRandomQuotation = async function() {

  const readRandomQuotationQuery = 
    "SELECT quotation, person "+
    "FROM quotations " +
    "OFFSET floor(random()* " + 
       "(SELECT COUNT(*) FROM quotations)) " +
    "LIMIT 1;";

  let quotationObject;

  try {
    const { rows } = await db.query(readRandomQuotationQuery);
    quotationObject = rows[0];
  } catch (err) {
    console.error('error running query', err);
  } 
  return quotationObject;
   
};

module.exports = readRandomQuotation;