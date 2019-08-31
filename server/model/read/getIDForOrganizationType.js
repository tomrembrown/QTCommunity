'use strict'

const db = require('./../db')

const getIDForOrganizationType = async function(name) {
  const getIDForOrganizationTypeQuery =
    'SELECT id FROM organization_types WHERE name_english=$1;'

  let id

  try {
    const { rows } = await db.query(getIDForOrganizationTypeQuery, [name])
    id = rows[0].id
  } catch (err) {
    console.error('error running query', err)
  }
  return id
}

module.exports = getIDForOrganizationType
