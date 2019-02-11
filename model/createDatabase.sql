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
DROP TABLE IF EXISTS quotations;

-- Drop tables with the older names
DROP TABLE IF EXISTS member_types;
DROP TABLE IF EXISTS members;
DROP TABLE IF EXISTS locales;
DROP TABLE IF EXISTS events;

-- This is a standalone table - for quotations
CREATE TABLE quotations(
  id SERIAL PRIMARY KEY,
  quotation TEXT NOT NULL,
  person TEXT NOT NULL
);

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

-- ****
-- Insert initial data
-- ****

INSERT INTO quotations
  (quotation, person) VALUES
  ('There will not be a magic day when we wake up and it''s now okay to express ourselves publicly.  We make that day by doing things publicly until it''s simply the way things are.',
    'Senator Tammy Baldwin'),
  ('It takes some intelligence and insight to figure out you''re gay and then a tremendous amount of balls to live it and live it proudly.',
    'Jason Bateman'),
  ('I believe that no one should ever have to choose between a career we love and living our lives with authenticity and integrity',
    'Selisse Berry'),
  ('I''ve been embraced by a new community. That''s what happens when you''re finally honest about who you are; you find others like you.',
    'Chaz Bono'),
  ('Openness may not completely disarm prejudice, but it''s a good place to start.',
    'Jason Collins'),
  ('I think being gay is a blessing, and it''s something I am thankful for every single day.',
    'Anderson Cooper'),
  ('It is revolutionary for any trans person to choose to be seen and visible in a world that tells us we should not exist.',
    'Laverne Cox'),
  ('The beauty of standing up for your rights is others see you standing and stand up as well.',
    'Cassandra Duffy'),
  ('Never be bullied into silence. Never allow yourself to be made a victim. Accept no one''s definition of your life; define yourself.',
    'Harvey Fierstein'),
  ('I hate the word homophobia. It''s not a phobia. You''re not scared. You''re an asshole.',
    'Morgan Freeman'),
  ('I very much want to inject gay culture into the mainstream.  It''s not an underground tool for me.  It''s my whole life.', 
    'Lady Gaga'),
  ('Why is it that, as a culture, we are more comfortable seeing two men holding guns than holding hands?',
    'Ernest J. Gaines'),
  ('Personally, coming out was one of the most important things I''ve ever done, lifting from my shoulders the millstone of lies that I hadn''t even realized I was carrying.',
    'Sir Ian McKellen'),
  ('When all Americans are treated as equal, no matter who they are or whom they love, we are all more free.',
    'Barack Obama'),
  ('This world would be a whole lot better if we just made an effort to be less horrible to one another.',
    'Ellen Page'),
  ('Every gay and lesbian person who has been lucky enough to survive thee turmoil of growing up is a survivor.  Survivors have an obligation to those who will face the same challenges.',
    'Bob Paris'),
  ('If Harry Potter taught us anything it''s that no one should live in a closet.',
    'J.K. Rowling'),
  ('The pressures to gay teens can be overwhelming - to keep secrets, tell lies, deny who you are, and try to be who you''re not.  Remember: you are special and worth being cared about, loved, and accepted just as you are.  Never, ever let anyone convince you otherwise.',
    'Alex Sanchez'),
  ('We should indeed keep calm in the face of difference, and live our lives in a state of inclusion and wonder at the diversity of humanity.',
    'George Takei'),
  ('Please remember, especially in these times of group-think and the right-on chorus, that no person is your friend (or kin) who demands your silence, or denies your right to grow and be perceived as fully blossomeed as you were intended.',
    'Alice Walker');