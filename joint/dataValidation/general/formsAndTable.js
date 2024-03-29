'use strict'

/*
 * Contains an object with list of forms - so form names are
 * consistent everywhere. Also has a map to determine which
 * database tables are associated with which forms - for the 
 * purpose of database searches in some generic functions
 */

const forms = {
  CREATE_ORGANIZATION: 'createOrganization',
  EDIT_ORGANIZATION: 'editOrganization',
  LOGIN: 'login',
  SITE_LOGIN: 'siteLogin',
  ADD_PLACE: 'addPlace',
  EDIT_PLACE: 'editPlace',  
  ADD_EVENT: 'addEvent',  
  SEND_EMAIL: 'sendEmail',
  ORGANIZATION_FILTER: 'organizationFilter'
}

const getTableFromForm = new Map([
  [forms.CREATE_ORGANIZATION, 'organizations'],
  [forms.LOGIN, 'organizations'],
  [forms.SITE_LOGIN,'site_access'],
  [forms.ADD_PLACE, 'places'],
  [forms.EDIT_PLACE, 'places'],  
  [forms.EDIT_ORGANIZATION, 'organizations'],
  [forms.ADD_EVENT, 'event_groups'],  
  [forms.SEND_EMAIL, 'NONE'],
  [forms.ORGANIZATION_FILTER, 'organizations']
])

module.exports = { forms, getTableFromForm }