'use strict';

const model = require('./server/model');

const create519Data = {
  name: "The 519",
  address: "519 Church St., Toronto, ON M4Y 2C9"
}

const createSpaData = {
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

model.createPlace(create519Data).then((result) => {
  model.createPlace(createSpaData)
}).then((result) => {
  model.getIDForPlace("The 519")
})



