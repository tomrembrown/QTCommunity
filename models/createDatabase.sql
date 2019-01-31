/* -----------------------------------------------------------------
Script to create the Queer Toronto database
*** Note this will delete all tables and therefore delete all data
-------------------------------------------------------------------*/

-- Assume database has been created and we are logged into the 
-- queer_toronto database as user qt_computer_access

-- Drop tables in reverse order of creation
DROP TABLE IF EXISTS events;
DROP TABLE IF EXISTS members;
DROP TABLE IF EXISTS locales;
DROP TABLE IF EXISTS categories;
DROP TABLE IF EXISTS member_types;

-- Now, create them - from simplest and depends on nothing - to more complex
CREATE TABLE member_types(
  member_type_id SMALLSERIAL PRIMARY KEY,
  name_english TEXT NOT NULL,
  name_french TEXT NOT NULL
);

CREATE TABLE categories(
  category_id SMALLSERIAL PRIMARY KEY,
  name_english TEXT NOT NULL,
  name_french TEXT NOT NULL,
  colour CHAR(6) NOT NULL
);

CREATE TABLE locales(
  locale_id SERIAL PRIMARY KEY,
  address TEXT NOT NULL,
  latitude DECIMAL(9,6),
  longitude DECIMAL(9,6)
);

CREATE TABLE members(
  member_id SERIAL PRIMARY KEY,
  login CITEXT UNIQUE NOT NULL,
  name_english TEXT,
  name_french TEXT,
  password_encrypted TEXT NOT NULL,
  logo_path TEXT,
  member_type_id SMALLINT REFERENCES member_types(member_type_id),
  description_english TEXT,
  description_french TEXT,
  locale_id INTEGER REFERENCES locales(locale_id),
  locale_room TEXT,
  signup_date TIMESTAMP,
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
  logged_in BOOLEAN,
  last_logged_in TIMESTAMP,
  family_friendly BOOLEAN, 
  is_member BOOLEAN NOT NULL DEFAULT FALSE,
  is_shown BOOLEAN NOT NULL DEFAULT FALSE
);

CREATE TABLE events(
  event_id SERIAL PRIMARY KEY,
  member_id INTEGER REFERENCES members(member_id),
  category_id INTEGER REFERENCES categories(category_id),
  locale_id INTEGER REFERENCES locales(locale_id),
  locale_room TEXT,
  start_time TIMESTAMP NOT NULL,
  end_time TIMESTAMP NOT NULL,
  description_english TEXT,
  description_french TEXT, 
  long_title_english TEXT NOT NULL,
  long_title_french TEXT NOT NULL,
  short_title_english TEXT NOT NULL,
  short_title_french TEXT NOT NULL,
  family_friendly BOOLEAN NOT NULL,
  min_age SMALLINT CHECK (min_age >= 0 AND min_age <= 100),
  max_age SMALLINT CHECK (max_age >= 1 AND max_age <= 100),
  race_religion TEXT,
  only_race_religion BOOLEAN NOT NULL DEFAULT FALSE,
  male_ok BOOLEAN NOT NULL DEFAULT TRUE,
  female_ok BOOLEAN NOT NULL DEFAULT TRUE,
  trans_ok BOOLEAN NOT NULL DEFAULT TRUE,
  orientation TEXT,
  is_shown BOOLEAN NOT NULL DEFAULT TRUE,
  need_registration BOOLEAN NOT NULL DEFAULT TRUE,
  price MONEY NOT NULL DEFAULT 0
);