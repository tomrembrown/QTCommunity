'use strict'

const createGeneric = require('./createGeneric')

const createOrganization = async function(objectInputData) {

  const possibleColumnList = [
    'name',
    'organization_type_id',
    'description_english',
    'description_french',
    'image_link',
    'is_member',
    'is_shown',
    'login',
    'password_encrypted',
    'signup_date',
    'logged_in',
    'last_logged_in',
    'place_id',
    'place_room',
    'email',
    'display_email',
    'phone',
    'phone_extension',
    'display_phone',
    'website_english',
    'website_french',
    'display_website',
    'facebook',
    'display_facebook',
    'twitter',
    'display_twitter',
    'linked_in',
    'display_linked_in',
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
    await createGeneric(objectInputData, possibleColumnList, 'organizations')
  } catch (err) {
    throw Error(err)
  }

}

module.exports = createOrganization
