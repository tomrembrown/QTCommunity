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
ALTER TABLE IF EXISTS places DROP COLUMN IF EXISTS organization_id;
DROP TABLE IF EXISTS organizations;
DROP TABLE IF EXISTS places;
DROP TABLE IF EXISTS wheelchair_choices;
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
  name_french TEXT DEFAULT NULL
);

CREATE TABLE categories(
  id SMALLSERIAL PRIMARY KEY,
  name_english TEXT NOT NULL,
  name_french TEXT DEFAULT NULL,
  colour CHAR(6) NOT NULL
);

CREATE TABLE wheelchair_choices(
  id SMALLSERIAL PRIMARY KEY,
  name TEXT NOT NULL
);

CREATE TABLE places(
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  address TEXT NOT NULL,
  google_places_id TEXT NOT NULL,  
  latitude DECIMAL(9,6) DEFAULT NULL,
  longitude DECIMAL(9,6) DEFAULT NULL,

  -- Information about who place is geared for 
  -- Below is also in organizations & events
  family_friendly BOOLEAN NOT NULL DEFAULT TRUE,  
  min_age SMALLINT CHECK (min_age >= 0 AND min_age <= 100) DEFAULT NULL,
  max_age SMALLINT CHECK (max_age >= 1 AND max_age <= 100) DEFAULT NULL,
  gender_female BOOLEAN NOT NULL DEFAULT TRUE,
  gender_male BOOLEAN NOT NULL DEFAULT TRUE,
  gender_transgendered BOOLEAN NOT NULL DEFAULT TRUE,
  gender_two_spirit BOOLEAN NOT NULL DEFAULT TRUE,
  gender_m2f_transexual BOOLEAN NOT NULL DEFAULT TRUE,
  gender_f2m_transexual BOOLEAN NOT NULL DEFAULT TRUE,
  gender_intersex BOOLEAN NOT NULL DEFAULT TRUE,
  orientation_lesbian BOOLEAN NOT NULL DEFAULT TRUE,
  orientation_gay BOOLEAN NOT NULL DEFAULT TRUE,
  orientation_bisexual BOOLEAN NOT NULL DEFAULT TRUE,
  orientation_queer BOOLEAN NOT NULL DEFAULT TRUE,
  orientation_questioning BOOLEAN NOT NULL DEFAULT TRUE,
  orientation_asexual BOOLEAN NOT NULL DEFAULT TRUE,
  orientation_pansexual BOOLEAN NOT NULL DEFAULT TRUE,
  orientation_heterosexual BOOLEAN NOT NULL DEFAULT TRUE,
  race_religion TEXT DEFAULT NULL,
  only_race_religion BOOLEAN NOT NULL DEFAULT FALSE,

  -- Information about who place is for - only in place
  wheelchair_accessible BOOLEAN NOT NULL DEFAULT TRUE,
  wheelchair_choice_id SMALLINT REFERENCES wheelchair_choices(id) NOT NULL,
  wheelchair_text TEXT DEFAULT NULL
);

CREATE TABLE organizations(

  -- Primay key
  id SERIAL PRIMARY KEY,
  
  -- Basic information about organization
  name TEXT NOT NULL UNIQUE,
  organization_type_id SMALLINT REFERENCES organization_types(id) NOT NULL,
  description_english TEXT DEFAULT NULL,
  description_french TEXT DEFAULT NULL,
  image_link TEXT DEFAULT NULL,

  -- Login information (some organizations don't - just get data from parser feed)
  is_member BOOLEAN NOT NULL DEFAULT FALSE,
  is_shown BOOLEAN NOT NULL DEFAULT FALSE,
  login CITEXT UNIQUE DEFAULT NULL,
  password_encrypted TEXT DEFAULT NULL,
  login_token TEXT DEFAULT NULL,
  signup_date TIMESTAMP DEFAULT NULL,
  logged_in BOOLEAN DEFAULT NULL,
  last_logged_in TIMESTAMP DEFAULT NULL,
  
  -- Physical location
  place_id INTEGER REFERENCES places(id) ON DELETE SET NULL DEFAULT NULL,
  place_room TEXT DEFAULT NULL,

  -- Contact information
  email CITEXT DEFAULT NULL,
  display_email BOOLEAN NOT NULL DEFAULT FALSE,
  phone BIGINT CHECK (phone >= 2000000000 AND phone <= 9999999999) DEFAULT NULL,
  phone_extension INTEGER DEFAULT NULL,
  display_phone BOOLEAN NOT NULL DEFAULT FALSE,
  website_english TEXT DEFAULT NULL,
  website_french TEXT DEFAULT NULL,
  display_website BOOLEAN NOT NULL DEFAULT FALSE,
  facebook TEXT DEFAULT NULL,
  display_facebook BOOLEAN NOT NULL DEFAULT FALSE,
  twitter TEXT DEFAULT NULL,
  display_twitter BOOLEAN NOT NULL DEFAULT FALSE,
  youtube TEXT DEFAULT NULL,
  display_youtube BOOLEAN NOT NULL DEFAULT FALSE,
  instagram TEXT DEFAULT NULL,
  display_instagram BOOLEAN NOT NULL DEFAULT FALSE,
  linkedin TEXT DEFAULT NULL,
  display_linkedin BOOLEAN NOT NULL DEFAULT FALSE,
  pinterest TEXT DEFAULT NULL,
  display_pinterest BOOLEAN NOT NULL DEFAULT FALSE,
  google_plus TEXT DEFAULT NULL,
  display_google_plus BOOLEAN NOT NULL DEFAULT FALSE,
  rss TEXT DEFAULT NULL,
  display_rss BOOLEAN NOT NULL DEFAULT FALSE,
  spotify TEXT DEFAULT NULL,
  display_spotify BOOLEAN NOT NULL DEFAULT FALSE,
  tumblr TEXT DEFAULT NULL,
  display_tumblr BOOLEAN NOT NULL DEFAULT FALSE,

  -- Information about who organization is geared for
  family_friendly BOOLEAN NOT NULL DEFAULT TRUE,  
  min_age SMALLINT CHECK (min_age >= 0 AND min_age <= 100) DEFAULT NULL,
  max_age SMALLINT CHECK (max_age >= 1 AND max_age <= 100) DEFAULT NULL,
  gender_female BOOLEAN NOT NULL DEFAULT TRUE,
  gender_male BOOLEAN NOT NULL DEFAULT TRUE,
  gender_transgendered BOOLEAN NOT NULL DEFAULT TRUE,
  gender_two_spirit BOOLEAN NOT NULL DEFAULT TRUE,
  gender_m2f_transexual BOOLEAN NOT NULL DEFAULT TRUE,
  gender_f2m_transexual BOOLEAN NOT NULL DEFAULT TRUE,
  gender_intersex BOOLEAN NOT NULL DEFAULT TRUE,
  orientation_lesbian BOOLEAN NOT NULL DEFAULT TRUE,
  orientation_gay BOOLEAN NOT NULL DEFAULT TRUE,
  orientation_bisexual BOOLEAN NOT NULL DEFAULT TRUE,
  orientation_queer BOOLEAN NOT NULL DEFAULT TRUE,
  orientation_questioning BOOLEAN NOT NULL DEFAULT TRUE,
  orientation_asexual BOOLEAN NOT NULL DEFAULT TRUE,
  orientation_pansexual BOOLEAN NOT NULL DEFAULT TRUE,
  orientation_heterosexual BOOLEAN NOT NULL DEFAULT TRUE,
  race_religion TEXT DEFAULT NULL,
  only_race_religion BOOLEAN NOT NULL DEFAULT FALSE
);

-- Most places linked to specific organizations, i.e. 519 organization linked to 519 place
ALTER TABLE places 
ADD COLUMN organization_id INTEGER REFERENCES organizations(id) DEFAULT NULL;

CREATE TABLE event_groups(

  -- Primary key
  id SERIAL PRIMARY KEY,

  -- Basic information about event
  long_title_english TEXT NOT NULL,
  long_title_french TEXT NULL,
  short_title_english TEXT NULL,
  short_title_french TEXT NULL,
  mobile_title_english TEXT NULL,
  mobile_title_french TEXT NULL,
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
  min_age SMALLINT CHECK (min_age >= 0 AND min_age <= 100) DEFAULT NULL,
  max_age SMALLINT CHECK (max_age >= 1 AND max_age <= 100) DEFAULT NULL,
  gender_female BOOLEAN NOT NULL DEFAULT TRUE,
  gender_male BOOLEAN NOT NULL DEFAULT TRUE,
  gender_transgendered BOOLEAN NOT NULL DEFAULT TRUE,
  gender_two_spirit BOOLEAN NOT NULL DEFAULT TRUE,
  gender_m2f_transexual BOOLEAN NOT NULL DEFAULT TRUE,
  gender_f2m_transexual BOOLEAN NOT NULL DEFAULT TRUE,
  gender_intersex BOOLEAN NOT NULL DEFAULT TRUE,
  orientation_lesbian BOOLEAN NOT NULL DEFAULT TRUE,
  orientation_gay BOOLEAN NOT NULL DEFAULT TRUE,
  orientation_bisexual BOOLEAN NOT NULL DEFAULT TRUE,
  orientation_queer BOOLEAN NOT NULL DEFAULT TRUE,
  orientation_questioning BOOLEAN NOT NULL DEFAULT TRUE,
  orientation_asexual BOOLEAN NOT NULL DEFAULT TRUE,
  orientation_pansexual BOOLEAN NOT NULL DEFAULT TRUE,
  orientation_heterosexual BOOLEAN NOT NULL DEFAULT TRUE,
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
  end_time TIMESTAMP NULL
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
  ('Every gay and lesbian person who has been lucky enough to survive the turmoil of growing up is a survivor. Survivors have an obligation to those who will face the same challenges.',
    'Bob Paris'),
  ('If Harry Potter taught us anything it''s that no one should live in a closet.',
    'J.K. Rowling'),
  ('The pressures to gay teens can be overwhelming - to keep secrets, tell lies, deny who you are, and try to be who you''re not. Remember: you are special and worth being cared about, loved, and accepted just as you are.  Never, ever let anyone convince you otherwise.',
    'Alex Sanchez'),
  ('We should indeed keep calm in the face of difference, and live our lives in a state of inclusion and wonder at the diversity of humanity.',
    'George Takei'),
  ('Please remember, especially in these times of group-think and the right-on chorus, that no person is your friend (or kin) who demands your silence, or denies your right to grow and be perceived as fully blossomed as you were intended.',
    'Alice Walker'),
  ('I believe a lot of our lives are spent asleep, and what I''ve been trying to do is hold on to those moments when a little spark cuts through the fog and nudges you.',
    'Rufus Wainwright'),
  ('Look. Art knows no prejudice, art knows no boundaries, art doesn''t really have judgement in it''s purest form. So just go, just go',
    'K. D. Lang'),
  ('Gay marriage - it''s not about two people being gay: it''s about two people who love each other and who have decided to commit to each other for the exact same reasons any other couple would get married.',
    'Luke Macfarlane'),
  ('Yes my secrets out! I love pantsuits! Damn you your narrow minded ways!',
    'Elvira Kurt'),
  ('So that''s what a lesbian looks like. How come I couldn''t tell? Perhaps, I''ll just sketch her for future reference.',
    'Elvira Kurt'),
  ('Pretty really comes from inner confidence; it''s when you feel good about yourself.',
    'Jay Manuel'),
  ('Who would give a law to lovers? Love is unto itself a higher law.',
    'Boethius'),
  ('Caring for myself is not self-indulgence, it is self-preservation, and that is an act of political warfare.',
    'Audre Lorder'),
  ('Once you''ve done something that you used to think was impossible, what could ever really scare you again?',
    'Ellen Page'),
  ('To love oneself is the beginning of a lifelong romance.',
    'Oscar Wilde'),
  ('Hope will never be silent.',
    'Harvey Milk'),
  ('Our society needs to recognize the unstoppable momentum toward unequivocal civil equality for every gay, lesbian, bisexual and transgendered citizen of this country.',
    'Zachary Quinto');

INSERT INTO organization_types
  (name_english) VALUES
  ('Community Organization'), 
  ('Health and Social Services'), 
  ('Bar or Dance Club'), 
  ('Art, Theatre, Culture'), 
  ('Adult Entertainment'),
  ('Social Club'),
  ('Athletic Club');

INSERT INTO wheelchair_choices
  (name) VALUES
  ('Not Wheelchair Accessible'),
  ('Partially Wheelchair Accessible'),
  ('Fully Wheelchair Accessible');