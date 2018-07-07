var mysql = require('./connection');
var md5 = require('md5');

module.exports = (username, password, callback) => {
  var passwordmd5 = md5(password);
  var sql = 'SELECT * FROM User WHERE username = "' + username + '" and password = "' + passwordmd5 + '"';
  mysql.query(sql, function (err, result) {
    if (err) {
      console.log('[QUERY ERROR] - ', err.message);
      
      callback(false);
    }
    console.log('[QUERY Username and password SUCCESSFULLY]');
    if (result.length == 0) {
      callback(false);
    } else {
      callback(result[0]);
    }
  });
};
