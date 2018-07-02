var mysql = require('./connection');


module.exports = (username, password, callback) => {

  var sql = 'SELECT * FROM User WHERE username = "' + username + '" and password = "' + password + '"';
  mysql.query(sql, function (err, result) {
    if (err) {
      console.log('[QUERY ERROR] - ', err.message);
      
      callback(false);
    }
    console.log('[QUERY Username and password SUCCESSFULLY]');
    
    if (result.length == 0) {
      callback(false);
    } else {
      callback(true);
    }
  });
};