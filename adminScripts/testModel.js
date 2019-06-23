'use strict'

const model = require('../server/model')

const create519PlaceData = {
  name: 'The 519',
  address: '519 Church St., Toronto, ON M4Y 2C9'
}

const createSpaPlaceData = {
  name: 'Spa Excess',
  address: '105 Carlton St., Toronto, ON M5B 1M1',
  gender_female: false,
  gender_transgendered: false,
  gender_two_spirit: false,
  gender_m2f_transexual: false,
  gender_f2m_transexual: false,
  gender_intersex: false,
  family_friendly: false,
  min_age: 19
}

let create519OrganizationData = {
  name: 'The 519',
  login: 'the519',
  description_english:
    'The 519 is a city organization dedicated to advocacy for the inclusion of LGBTQ communities. See upcoming events, programming, and location details.',
  is_shown: true,
  email: 'Info@The519.org',
  image_link: 'https://charityvillage.com/api/v1/images/1e2562f1-d6ba-e711-80d4-000af7847803',
  display_email: true,
  phone: 4163926874,
  display_phone: true,
  website_english: 'http://www.the519.org/',
  display_website: true,
  facebook: 'https://www.facebook.com/The519',
  display_facebook: true,
  twitter: 'https://twitter.com/The519',
  display_twitter: true
}

let createSpaOrganizationData = {
  name: 'Spa Excess',
  description_english:
    "Spa Excess is Toronto's largest and best bathhouse, catering to men looking for state of the art facilities, a fully licensed bar, and 24-hour access.",
  is_shown: true,
  email: 'spaexcessinfo@gmail.com',
  display_email: false,
  phone: 4162602363,
  display_phone: false,
  website_english: 'https://spaexcess.com/',
  display_website: true,
  facebook: 'https://www.facebook.com/SpaExcess',
  display_facebook: true,
  image_link: 'https://bearsinexcess.files.wordpress.com/2015/03/spa_excess-logo-web.jpg'
}

async function create519() {

  try {
    await model.createPlace(create519PlaceData)
    console.log('Created The 519 place')
    const placeID = await model.getIDForPlace('The 519')
    console.log('Got place id for the 519: ' + placeID)
    const organizationTypeID = await model.getIDForOrganizationType('Community Organization')
    console.log('Got id for organization type: ' + organizationTypeID)
    create519OrganizationData.organization_type_id = organizationTypeID
    create519OrganizationData.place_id = placeID
    await model.createOrganization(create519OrganizationData)
    console.log('519 Organization inserted correctly')
  }
  catch (err) {
    console.log('Error encountered: ' + err)
    throw Error(err)
  }

}

// // 519
// {
//   let placeID, organizationTypeID

//   model
//     .createPlace(create519PlaceData)
//     .then(() => {
//       console.log('Created The 519 place')
//       return model.getIDForPlace('The 519')
//     })
//     .then(id => {
//       placeID = id
//       console.log('Got place id for the 519: ' + id)
//       return model.getIDForOrganizationType('Community Organization')
//     })
//     .then(id => {
//       organizationTypeID = id
//       console.log('Got id for organization type: ' + organizationTypeID)
//       create519OrganizationData.organization_type_id = organizationTypeID
//       create519OrganizationData.place_id = placeID
//       return model.createOrganization(create519OrganizationData)
//     })
// }

async function createSpa() {

  try {
    await model.createPlace(createSpaPlaceData)
    console.log('Created Spa Excess place')
    const placeID = await model.getIDForPlace('Spa Excess')
    console.log('Got place id for Spa Excess: ' + placeID)
    const organizationTypeID = await model.getIDForOrganizationType('Adult Entertainment')
    console.log('Got id for organization type: ' + organizationTypeID)
    createSpaOrganizationData.organization_type_id = organizationTypeID
    createSpaOrganizationData.place_id = placeID
    await model.createOrganization(createSpaOrganizationData)
    console.log('Spa Organization inserted correctly')
  }
  catch (err) {
    console.log('Error encountered: ' + err)
    throw Error(err)
  }

}

// // Spa
// {
//   let placeID, organizationTypeID

//   model
//     .createPlace(createSpaPlaceData)
//     .then(() => {
//       console.log('Created Spa Excess place')
//       return model.getIDForPlace('Spa Excess')
//     })
//     .then(id => {
//       placeID = id
//       console.log('Got place id for Spa Excess: ' + id)
//       return model.getIDForOrganizationType('Adult Entertainment')
//     })
//     .then(id => {
//       organizationTypeID = id
//       console.log('Got id for organization type: ' + organizationTypeID)
//       createSpaOrganizationData.organization_type_id = organizationTypeID
//       createSpaOrganizationData.place_id = placeID
//       return model.createOrganization(createSpaOrganizationData)
//     })
//     .then(() => {
//       model.close()
//     })
// }

async function runAll() {
  console.log('Before promise all')
  await Promise.all([create519(), createSpa()])
  console.log('After promise all')
  let isTaken = await model.checkElementTaken('name','Spa Excess')
  console.log('Spa Excess name is taken: ' + isTaken)
  isTaken = await model.checkElementTaken('name','Timbuktu')
  console.log('Timbuktu name is taken: ' + isTaken)
  model.close()
}

runAll()