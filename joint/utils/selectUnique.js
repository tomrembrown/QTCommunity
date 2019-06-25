'use strict'

/*
 * This subroutine takes two arrays, joins them together and then
 * removes duplicate entries, so that the resulting array contains all 
 * elements that appear at least once in either array
 */

const selectUnique = (array1, array2) => {
  const uniqueArray = []

  const arr = array1.concat(array2)
  let len = arr.length
  const assoc = {}

  while (len--) {
    const item = arr[len]

    if (!assoc[item]) {
      uniqueArray.unshift(item)
      assoc[item] = true
    }
  }

  return uniqueArray
}

module.exports = selectUnique