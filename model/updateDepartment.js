var mysql = require('./connection');

module.exports = (did, name, callback) => {

  var sql = 'UPDATE Department SET dname = ? where did = ?';
  var sqlParams = [name, did];
  mysql.query(sql, sqlParams, function (err, result) {
    if (err) {
      console.log('[UPDATE ERROR] - ', err.message);
      callback(false);
    }
    console.log('[UPDATE Department SUCCESSFULLY]');

    callback(true);
  });
};