'use strict'

/*
 * This subroutine takes two arguments, one is an array of column names
 * to include in the final data, and the second is an array of objects,
 * which is an array where each row is an object representing a row in the
 * database - with the key being the column name and the value being the 
 * data for that column and row in the database. This subroutine extracts
 * only those columns that are needed (in columnList) and puts them in an 
 * array of arrays (inner array is columns) in the order they appear in 
 * columnList
 */


const buildRowsArray = (columnList, organizationsArray) => {
  const rowsArray = []
  if (!Array.isArray(organizationsArray)) organizationsArray = [organizationsArray]
  organizationsArray.forEach(organizationData => {
    const thisOrganization = []
    columnList.forEach(column => {
      thisOrganization.push(organizationData[column])
    })
    rowsArray.push(thisOrganization)
  })

  return rowsArray
}

module.exports = buildRowsArray