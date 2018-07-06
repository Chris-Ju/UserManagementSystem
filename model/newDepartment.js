var mysql = require('./connection');

module.exports = (name, callback) => {

  var sql = 'INSERT INTO Department(dname) VALUES(?)';
  var sqlParams = [name];
  mysql.query(sql, sqlParams, function (err, result) {
    if (err) {
      console.log('[INSERT ERROR] - ', err.message);
      callback(false);
    }
    console.log('[INSERT Department SUCCESSFULLY]');

    callback(true);
  });
};
