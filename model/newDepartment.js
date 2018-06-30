var mysql = require('./connection');

module.exports = (name) => {
  mysql.connect();
  var sql = 'INSERT INTO Department(dname) VALUES(?)';
  var sqlparamas = [name];
  msql.query(sql, sqlParams, function (err, result) {
    if (err) {
      console.log('[INSERT ERROR] - ', err.message);
      msql.end();
      return false;
    }
    console.log('[INSERT Department SUCCESSFULLY]');
  }).then(() => {
    msql.end();
    return true;
  });

};