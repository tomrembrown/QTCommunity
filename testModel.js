'use strict'

const model = require('./server/model')

const create519PlaceData = {
  name: "The 519",
  address: "519 Church St., Toronto, ON M4Y 2C9"
}

const createSpaPlaceData = {
  name: "Spa Excess",
  address: "105 Carlton St., Toronto, ON M5B 1M1",
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
  name: "The 519",

}

let placeID
let orgID

model.createPlace(create519PlaceData).then(() => {
  console.log('Created The 519 place')
  return model.createPlace(createSpaPlaceData)
}).then(() => {
  console.log('Created Spa excess place')
  return model.getIDForPlace("The 519")
}).then((id) => {
  placeID = id
  console.log('Got id for the 519 ' + id)
  return model.getIDForOrganizationType('Community Organization')
}).then((id) => {
  orgID = id
  console.log('Got id for organization type ' + orgID)
  model.close()
}).then(() => {
  console.log('Closed database')
})



