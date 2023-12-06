const { Pool } = require('pg');

const dbConParams = {
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT
};

const db = new Pool(dbConParams);

db.connect();

module.exports = db;