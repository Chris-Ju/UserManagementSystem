var mysql = require('./connection');


module.exports = (callback) => {
  mysql.connect();
  var sql = 'SELECT username, uright FROM User';
  mysql.query(sql, function (err, result) {
    if (err) {
      console.log('[QUERY ERROR] - ', err.message);
      mysql.end();
      callback(false);
    }
    console.log('[QUERY User SUCCESSFULLY]');
    callback(result);
  });
};