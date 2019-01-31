const { Pool, Client } = require('pg');
const fs = require('fs');
require('dotenv').config({path:'../.env'});  // load the environment variables from .env

const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT
});

let sqlScript = fs.readFileSync('createDatabase.sql').toString();

pool.query(sqlScript, (err, res) => {
  if (err) {
    return console.error('error running query', err);
  }
  console.log('Tables successfully created!');
  pool.end();
});