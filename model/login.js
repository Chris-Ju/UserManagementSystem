var mysql = require('./connection');


module.exports = (username, password) => {
  mysql.connect();
  var sql = 'SELECT * FROM User WHERE username = ' + username + ' and password = ' + password;
  var data = [];
  mysql.query(sql, function (err, result) {
    if (err) {
      console.log('[QUERY ERROR] - ', err.message);
      mysql.end();
      return false;
    }
    data = result;
    console.log('[QUERY Username and password SUCCESSFULLY]');
  }).then(() => {
    mysql.end();
    if (result.length == 0) {
      return false;
    } else {
      return true;
    }
  });

};