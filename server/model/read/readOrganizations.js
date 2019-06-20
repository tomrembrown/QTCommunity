'use strict'

const db = require('./../db')

const readOrganizations = async function () {

  const readOrganizationsQuery =
    'SELECT * FROM organizations;'

  let organizationsArray

  try {
    const { rows } = await db.query(readOrganizationsQuery)
    organizationsArray = rows
  } catch (err) {
    console.error('error running query', err)
    throw new Error('Error running read organizations query, query: ' +
      readOrganizationsQuery + ', error: ' + err.module)
  }
  return organizationsArray
}

module.exports = readOrganizations