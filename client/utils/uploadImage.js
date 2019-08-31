'use strict'
/*
 * This is a helper function that contains the code for upload images to the server
 */

import axios from "axios"

const uploadImage = async function(data) {

  console.log('In uploadImage function')

  let response

  try {
    response = await axios.post(
      'createRoutesServer/uploadImage', data, {
        headers: {
          'accept': 'application/json',
          'Accept-Language': 'en-US,en;q=0.8',
          'Content-Type': `multipart/form-data; boundary=${data._boundary}`
        }
      }
    )
  } catch (error) {
    console.log(`Error in uploadImage: ${error.message}`)
    console.log(error)
    throw error
  }

  return response

}

export default uploadImage