var mysql = require('./connection');

module.exports = (callback) => {
  mysql.connect();
  var sql = 'SELECT dname, dmanager from Department';
  mysql.query(sql, function (err, result) {
    if (err) {
      console.log('[QUERY ERROR] - ', err.message);
      mysql.end();
      callback(false);
    }
    console.log('[QUERY Department SUCCESSFULLY]');
    mysql.end();
    callback(data);
  });
};