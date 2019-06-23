'use strict'

const db = require('./../db')

const readOrganizations = async function () {

  const readOrganizationsQuery =
    'SELECT o.image_link AS image_link, ' +
    '       o.name AS name, ' +
    '       o.description_english AS description_english, ' +
    '       o.website_english AS website_english, ' +
    '       o.display_website AS display_website, ' +
    '       o.email AS email, ' +
    '       o.display_email AS display_email, ' +
    '       o.phone AS phone, ' +
    '       o.display_phone AS display_phone, ' +
    '       o.phone_extension AS phone_extension, ' +
    '       t.name_english AS organization_type, ' +
    '       o.facebook AS facebook, ' +
    '       o.display_facebook AS display_facebook, ' +
    '       o.twitter AS twitter, ' +
    '       o.display_twitter AS display_twitter, ' +
    '       o.youtube AS youtube, ' +
    '       o.display_youtube AS display_youtube, ' +
    '       o.instagram AS instagram, ' +
    '       o.display_instagram AS display_instagram, ' +
    '       o.linkedin AS linkedin, ' +
    '       o.display_linkedin AS display_linkedin, ' +
    '       o.family_friendly AS family_friendly, ' +
    '       o.min_age AS min_age, ' + 
    '       o.max_age AS max_age, ' +
    '       o.gender_female AS gender_female, ' +
    '       o.gender_male AS gender_male, ' +
    '       o.gender_transgendered AS gender_transgendered, ' +
    '       o.gender_two_spirit AS gender_two_spirit, ' +
    '       o.gender_m2f_transexual AS gender_m2f_transexual, ' +
    '       o.gender_f2m_transexual AS gender_f2m_transexual, ' +
    '       o.gender_intersex AS gender_intersex, ' +
    '       o.orientation_lesbian AS orientation_lesbian, ' +
    '       o.orientation_gay AS orientation_gay, ' +
    '       o.orientation_bisexual AS orientation_bisexual, ' +
    '       o.orientation_queer AS orientation_queer, ' +
    '       o.orientation_questioning AS orientation_questioning, ' +
    '       o.orientation_asexual AS orientation_asexual, ' +
    '       o.orientation_pansexual AS orientation_pansexual, ' +
    '       o.orientation_heterosexual AS orientation_heterosexual, ' +
    '       o.race_religion AS race_religion, ' +
    '       o.only_race_religion AS only_race_religion ' +
    'FROM organizations AS o ' +
    'INNER JOIN organization_types AS t ON o.organization_type_id = t.id ' +
    'WHERE o.is_shown=TRUE;'

  let organizationsArray

  try {
    const { rows } = await db.query(readOrganizationsQuery)
    organizationsArray = rows
  } catch (err) {
    console.error('error running query', err)
    throw new Error('Error running read organizations query, query: ' +
      readOrganizationsQuery + ', error: ' + err.module)
  }
  return organizationsArray
}

module.exports = readOrganizations