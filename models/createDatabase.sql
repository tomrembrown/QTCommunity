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
