const { Pool, Client } = require('pg');
require('dotenv').config({path:'../.env'});  // load the environment variables from .env

const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT
});

pool.query('SELECT NOW() AS "theTime"', (err, res) => {
  if (err) {
    return console.error('error running query', err);
  }
  console.log(res.rows[0].theTime);
  pool.end();
});