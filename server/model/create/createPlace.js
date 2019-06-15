'use strict'

const createGeneric = require('./createGeneric')

const createPlace = async function (objectInputData) {
  
  const possibleColumnList = [
    'name',
    'address',
    'family_friendly',
    'min_age',
    'max_age',
    'gender_female',
    'gender_male',
    'gender_transgendered',
    'gender_two_spirit',
    'gender_m2f_transexual',
    'gender_f2m_transexual',
    'gender_intersex',
    'orientation_lesbian',
    'orientation_gay',
    'orientation_bisexual',
    'orientation_queer',
    'orientation_questioning',
    'orientation_asexual',
    'orientation_pansexual',
    'orientation_heterosexual',
    'race_religion',
    'only_race_religion'
  ]

  try {
    await createGeneric(objectInputData, possibleColumnList, 'places')
  } catch (err) {
    throw Error(err.message)
  }

}

module.exports = createPlace
