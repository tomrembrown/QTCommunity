'use strict'

/* 
 * This subroutine saves a json object to a filename starting with a string
 * and ending with date and time with .dat
 */

const twoDigits = require('../joint/utils/twoDigits')

const saveOutput = (startName, outputJSON) => {
  const fs = require('fs')

  const now = new Date()
  const filename = './' + startName + '_' + 
                    now.getFullYear() +'_' + 
                    twoDigits(now.getMonth()+1) + '_' + 
                    twoDigits(now.getDate()) + '_' +
                    twoDigits(now.getHours()) + '_' + 
                    twoDigits(now.getMinutes()) + "_" + 
                    twoDigits(now.getSeconds()) + '.dat'

  fs.writeFile(filename, outputJSON, error => {
    if (error) {
      console.error(error)
      return
    }
    console.log('File ' + filename + ' has been created')
  })
}

module.exports = saveOutput