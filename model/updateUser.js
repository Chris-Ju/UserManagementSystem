var mysql = require('./connection');
var md5 = require('md5');

module.exports = (username, password, callback) => {
  var passwordmd5 = md5(password);
  var sql = 'UPDATE User SET password = ? where username = ?';
  var sqlParams = [passwordmd5, username];
  mysql.query(sql, sqlParams, function (err, result) {
    if (err) {
      console.log('[UPDATE ERROR] - ', err.message);
      
      callback(false);
    }
    console.log('[UPDATE User SUCCESSFULLY]');
    
    callback(true);
  });
};
