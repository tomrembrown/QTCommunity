'use strict'

const db = require('./../db')

const readOrganizations = async function (forDownload = false) {

  // if downloading - want all data, and don't want a join
  // - if sending to client limit data, and do join to get nice
  // info for organization type and places
  let readOrganizationsQuery
  if (forDownload) {
    readOrganizationsQuery = 'SELECT * FROM organizations'
  }
  else {
    readOrganizationsQuery =
      'SELECT o.image_link AS image_link, ' +
      '       o.name AS name, ' +
      '       o.id AS id, ' +
      '       o.description_english AS description_english, ' +
      '       o.website_english AS website_english, ' +
      '       o.display_website AS display_website, ' +
      '       o.email AS email, ' +
      '       o.display_email AS display_email, ' +
      '       o.phone AS phone, ' +
      '       o.display_phone AS display_phone, ' +
      '       o.phone_extension AS phone_extension, ' +
      '       t.name_english AS organization_type, ' +
      '       o.organization_type_id AS organization_type_id, ' + 
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
      '       o.pinterest AS pinterest, ' +
      '       o.display_pinterest AS display_pinterest, ' +
      '       o.google_plus AS google_plus, ' +
      '       o.display_google_plus AS display_google_plus, ' +
      '       o.rss AS rss, ' +
      '       o.display_rss AS display_rss, ' +
      '       o.spotify AS spotify, ' +
      '       o.display_spotify AS display_spotify, ' +
      '       o.tumblr AS tumblr, ' +
      '       o.display_tumblr AS display_tumblr, ' +
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
      '       o.only_race_religion AS only_race_religion, ' +
      '       p.name AS place_name, ' +
      '       p.address AS place_address, ' +
      '       o.place_room AS place_room, ' +
      '       w.name AS wheelchair_accessible, ' +
      '       p.wheelchair_text AS wheelchair_text ' +
      'FROM organizations AS o ' +
      'LEFT JOIN organization_types AS t ON o.organization_type_id = t.id ' +
      'LEFT JOIN places AS p ON o.place_id = p.id ' +
      'LEFT JOIN wheelchair_choices AS w ON p.wheelchair_choice_id = w.id ' +
      'WHERE o.is_shown=TRUE ' +
      'ORDER BY o.name ASC;'
  }

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