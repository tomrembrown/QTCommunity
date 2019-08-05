'use strict'

/*
 * This subroutine tests the read form file in the database
 */

const getFormData = require('../joint/businessLogic/server/getFormData')
const { forms, getTableFromForm } = 
  require('../joint/dataValidation/general/formsAndTable')

async function runAll() {
  try {
    const formName = forms.EDIT_ORGANIZATION
    const id = 1
    const formData = await getFormData(formName, id)
  } catch (error) {
     console.log('Error: ' + error.message)
  }
}

runAll()