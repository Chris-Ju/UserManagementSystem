var mysql = require('./connection');

module.exports = () => {
  mysql.connect();
  var sql = 'SELECT dname, dmanager from Department';
  var data = [];
  mysql.query(sql, function (err, result) {
    if (err) {
      console.log('[QUERY ERROR] - ', err.message);
      mysql.end();
      return false;
    }
    data = result;
    console.log('[QUERY Department SUCCESSFULLY]');
  }).then(() => {
    mysql.end();
    return data;
  });

};