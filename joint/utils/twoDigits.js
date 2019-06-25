'use strict'

/*
 * Converts number to two digit string, zero padded if necessary
 */

const twoDigits = myNumber => ("0" + myNumber).slice(-2)

module.exports = twoDigits
