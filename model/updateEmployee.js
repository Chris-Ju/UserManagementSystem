var mysql = require('./connection');
var md5 = require('md5');

module.exports = (eid, name, birth, hometown, body, callback) => {

  var sql = 'UPDATE Employee SET ename = ?, ebirth = ?, ehometown = ?, ebody = ? where eid = ?';
  var sqlParams = [name, birth, hometown, body, eid];
  mysql.query(sql, sqlParams, function (err, result) {
    if (err) {
      console.log('[UPDATE ERROR] - ', err.message);
      callback(false);
    }
    console.log('[UPDATE Employee SUCCESSFULLY]');
  });
  
};
