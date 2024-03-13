const { Pool } = require('pg');

const pool = new Pool({
  user: 'faithmsj',
  password: 'faithmasjuri',
  host: 'localhost',
  port: 5432, // default Postgres port
  database: 'exercise 7'
});

module.exports = {
  query: (text, params) => pool.query(text, params)
};