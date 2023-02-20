const mysql = require('mysql');
const connection = mysql.createPool({
  host: 'localhost',
  user: 'saanalapinkangas',
  password: 'salasana',
  database: 'db2023'
});
module.exports = connection;