'use strict'

/*
 * Contains an object with list of forms - so form names are
 * consistent everywhere. Also has a map to determine which
 * database tables are associated with which forms - for the 
 * purpose of database searches in some generic functions
 */

const forms = {
  CREATE_ORGANIZATION: 'createOrganization',
  LOGIN: 'login',
  ADD_PLACE: 'addPlace'
}

const getTableFromForm = new Map([
  [forms.CREATE_ORGANIZATION, 'organizations'],
  [forms.LOGIN, 'organizations'],
  [forms.ADD_PLACE, 'places']
])

module.exports = { forms, getTableFromForm }