var mysql = require('./connection');

module.exports = (callback) => {

  var sql = 'SELECT dname, dmanager from Department';
  mysql.query(sql, function (err, result) {
    if (err) {
      console.log('[QUERY ERROR] - ', err.message);
      
      callback(false);
    }
    console.log('[QUERY Department SUCCESSFULLY]');
    
    callback(result);
  });
};