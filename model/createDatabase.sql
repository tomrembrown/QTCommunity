/* -----------------------------------------------------------------
Script to create the Queer Toronto database
*** Note this will delete all tables and therefore delete all data
-------------------------------------------------------------------*/

-- Assume database has been created and we are logged into the 
-- queer_toronto database as user qt_computer_access

-- Drop tables in reverse order of creation
DROP TABLE IF EXISTS categories_event_groups_relations;
DROP TABLE IF EXISTS event_details;
DROP TABLE IF EXISTS event_groups;
DROP TABLE IF EXISTS organizations;
DROP TABLE IF EXISTS places;
DROP TABLE IF EXISTS categories;
DROP TABLE IF EXISTS organization_types;

-- Drop tables with the older names
DROP TABLE IF EXISTS member_types;
DROP TABLE IF EXISTS members;
DROP TABLE IF EXISTS locales;
DROP TABLE IF EXISTS events;

-- Now, create them - from simplest and depends on nothing - to more complex
CREATE TABLE organization_types(
  id SMALLSERIAL PRIMARY KEY,
  name_english TEXT NOT NULL,
  name_french TEXT NOT NULL
);

CREATE TABLE categories(
  id SMALLSERIAL PRIMARY KEY,
  name_english TEXT NOT NULL,
  name_french TEXT NOT NULL,
  colour CHAR(6) NOT NULL
);

CREATE TABLE places(
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  address TEXT NOT NULL,
  latitude DECIMAL(9,6) DEFAULT NULL,
  longitude DECIMAL(9,6) DEFAULT NULL,

  -- Information about who place is geared for 
  -- Below is also in organizations & events
  family_friendly BOOLEAN NOT NULL DEFAULT TRUE,
  male_ok BOOLEAN NOT NULL DEFAULT TRUE,
  female_ok BOOLEAN NOT NULL DEFAULT TRUE,
  trans_ok BOOLEAN NOT NULL DEFAULT TRUE,
  min_age SMALLINT CHECK (min_age >= 0 AND min_age <= 100) DEFAULT NULL,
  max_age SMALLINT CHECK (max_age >= 1 AND max_age <= 100) DEFAULT NULL,
  orientation TEXT DEFAULT NULL,
  race_religion TEXT DEFAULT NULL,
  only_race_religion BOOLEAN NOT NULL DEFAULT FALSE,

  -- Information about who place is for - only in place
  wheelchair_accessible BOOLEAN NOT NULL DEFAULT FALSE
);

CREATE TABLE organizations(

  -- Primay key
  id SERIAL PRIMARY KEY,
  
  -- Basic information about organization
  name TEXT NOT NULL UNIQUE,
  organization_type_id SMALLINT REFERENCES organization_types(id),
  description_english TEXT,
  description_french TEXT,
  image_link TEXT,

  -- Login information (some organizations don't - just get data from parser feed)
  is_member BOOLEAN NOT NULL DEFAULT FALSE,
  is_shown BOOLEAN NOT NULL DEFAULT FALSE,
  login CITEXT UNIQUE,
  password_encrypted TEXT,
  signup_date TIMESTAMP,
  logged_in BOOLEAN,
  last_logged_in TIMESTAMP,
  
  -- Physical location
  place_id INTEGER REFERENCES places(id),
  place_room TEXT,

  -- Contact information
  email CITEXT,
  display_email BOOLEAN NOT NULL DEFAULT FALSE,
  phone BIGINT CHECK (phone >= 2000000000 AND phone <= 9999999999),
  phone_extension INTEGER,
  display_phone BOOLEAN NOT NULL DEFAULT FALSE,
  website_english TEXT,
  website_french TEXT,
  display_website BOOLEAN NOT NULL DEFAULT FALSE,
  facebook TEXT,
  display_facebook BOOLEAN NOT NULL DEFAULT FALSE,
  twitter TEXT,
  display_twitter BOOLEAN NOT NULL DEFAULT FALSE,
  linked_in TEXT,
  display_linked_in BOOLEAN NOT NULL DEFAULT FALSE,
  
  -- Information about who organization is geared for
  family_friendly BOOLEAN DEFAULT TRUE,
  male_ok BOOLEAN DEFAULT TRUE,
  female_ok BOOLEAN DEFAULT TRUE,
  trans_ok BOOLEAN DEFAULT TRUE,
  min_age SMALLINT CHECK (min_age >= 0 AND min_age <= 100),
  max_age SMALLINT CHECK (max_age >= 1 AND max_age <= 100),
  orientation TEXT DEFAULT NULL,
  race_religion TEXT DEFAULT NULL,
  only_race_religion BOOLEAN NOT NULL DEFAULT FALSE
);

CREATE TABLE event_groups(

  -- Primary key
  id SERIAL PRIMARY KEY,

  -- Basic information about event
  long_title_english TEXT NOT NULL,
  long_title_french TEXT NOT NULL,
  short_title_english TEXT NOT NULL,
  short_title_french TEXT NOT NULL,
  mobile_title_english TEXT NOT NULL,
  mobile_title_french TEXT NOT NULL,
  description_english TEXT,
  description_french TEXT, 
  image_link TEXT,

  -- Is Shown, organization, registration
  is_shown BOOLEAN NOT NULL DEFAULT TRUE,
  organization_id INTEGER REFERENCES organizations(id),
  registration_website_english TEXT,
  registration_website_french TEXT, 
  need_registration BOOLEAN NOT NULL DEFAULT TRUE,
  price MONEY DEFAULT NULL,
  
  -- Contact information
  website_english TEXT,
  website_french TEXT,

  -- Information about who event is geared for
  family_friendly BOOLEAN NOT NULL DEFAULT TRUE,
  male_ok BOOLEAN NOT NULL DEFAULT TRUE,
  female_ok BOOLEAN NOT NULL DEFAULT TRUE,
  trans_ok BOOLEAN NOT NULL DEFAULT TRUE,
  min_age SMALLINT CHECK (min_age >= 0 AND min_age <= 100),
  max_age SMALLINT CHECK (max_age >= 1 AND max_age <= 100),
  orientation TEXT DEFAULT NULL,
  race_religion TEXT DEFAULT NULL,
  only_race_religion BOOLEAN NOT NULL DEFAULT FALSE  
);

CREATE TABLE event_details(

  -- Primary key
  id SERIAL PRIMARY KEY,

  -- Link to main event group
  event_group_id INTEGER REFERENCES event_groups(id),

  -- Details about this specific event
  place_id INTEGER REFERENCES places(id),
  place_room TEXT,
  start_time TIMESTAMP NOT NULL,
  end_time TIMESTAMP NOT NULL
);

CREATE TABLE categories_event_groups_relations(

  -- Ids of two tables that combined make composite primary key
  category_id SMALLINT REFERENCES categories(id),
  event_group_id INTEGER REFERENCES event_groups(id),
  PRIMARY KEY(category_id, event_group_id)
);
