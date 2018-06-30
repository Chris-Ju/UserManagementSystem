var mysql = require('promise-mysql');

module.exports = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'UMS'
});

