var mysql = require('./connection');

module.exports = (did, name, eid, callback) => {

  var sql = 'UPDATE Department SET dname = ?, dmanager = ? where did = ?';
  var sqlParams = [name, eid, did];
  mysql.query(sql, sqlParams, function (err, result) {
    if (err) {
      console.log('[UPDATE ERROR] - ', err.message);
      callback(false);
    }
    console.log('[UPDATE Department SUCCESSFULLY]');

    callback(true);
  });
};