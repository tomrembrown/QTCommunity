'use strict'

/*
 * This subroutine receives an array of data - which is an array of arrays,
 * corresponding to rows and columns in the database. It checks these
 * against an object columnDefaults, where the key is the column name
 * and the value is the default for that column, and it builds an array
 * of columns which have data other than the default for any row
 */

const checkColumns = (organizationsArray, columnDefaults) => {
  let columnsWithData = []

  organizationsArray.forEach(organizationData => {
    Object.keys(organizationData).forEach(column => {
      if (
        !columnsWithData.includes(column) &&
        organizationData[column] != columnDefaults[column]
      ) {
        columnsWithData.push(column)
      }
    })
  })

  return columnsWithData
}

module.exports = checkColumns