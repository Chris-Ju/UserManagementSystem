var mysql = require('./connection');

module.exports = () => {
  mysql.connect();
  var sql = 'SELECT username, uright FROM User';
  var data = [];
  mysql.query(sql, function (err, result) {
    if (err) {
      console.log('[QUERY ERROR] - ', err.message);
      mysql.end();
      return false;
    }
    data = result;
    console.log('[QUERY User SUCCESSFULLY]');
    console.log(data);
    mysql.end();
    return data;
  });
};