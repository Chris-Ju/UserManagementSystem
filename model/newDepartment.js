var mysql = require('./connection');

module.exports = (name) => {
  var sql = 'INSERT INTO Department(dname) VALUES(?)';
  var sqlparamas = [name];
  connection.query(sql, sqlParams, function (err, result) {
    if (err) {
      console.log('[INSERT ERROR] - ', err.message);
      connection.end();
      return false;
    }
    console.log('[INSERT SUCCESSFULLY]');
  });
  connection.end();
  return true;
};