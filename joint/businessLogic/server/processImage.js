'use strict'
/*
 * This converts an image stored as a URL string into a file and saves
 * it in the correct place on the server. Then it replaces the URL
 * string in the objectInputData with the path to that image
 */

const base64Img = require('base64-img')
const util = require('util')
const constants = require('../../constants')

// Use node's promisfy method to convert method with callback to promise
const base64ToFilePromise = util.promisify(base64Img.img)

const processImage = async function(objectInputData) {

  try {

    const pathFromServer = appRoot + '/client/view/public' + constants.imageURLStart
    
    // Filename is the organization login (the base64ToFile method will add extension)
    const filename = objectInputData.login

    const savedFilePath = await base64ToFilePromise(objectInputData.image_link,pathFromServer,filename)

    const pathFromClient = savedFilePath.split('public')[1]

    // Replace what is saved in database with just link to image when loaded in browser
    objectInputData.image_link = pathFromClient

  } catch (error) {
    console.log(`Error in businessLogic/server/processImage: ${error.message}`)
    throw new Error(`Error in businessLogic/server/processImage: ${error.message}`)
  }

  return objectInputData

}

module.exports = processImage