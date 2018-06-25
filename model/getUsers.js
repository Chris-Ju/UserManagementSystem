var mysql = require('./connection');

module.exports = () => {
  mysql.connect();
  var sql = 'SELECT * FROM User';
  mysql.query(sql, function (err, result) {
    if (err) {
      console.log('[QUERY ERROR] - ', err.message);
      mysql.end();
      return false;
    }
    console.log(result);
    console.log('[QUERY User SUCCESSFULLY]');
  });
  mysql.end();
  return true;
};
