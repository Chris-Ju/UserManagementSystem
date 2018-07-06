var mysql = require('./connection');

module.exports = (aid, callback) => {

  var sql = 'DELETE FROM Attendance where aid = ?';
  var sqlParams = [aid];
  mysql.query(sql, sqlParams, function (err, result) {
    if (err) {
      console.log('[DELETE ERROR] - ', err.message);
      
      callback(false);
    }
    
    console.log('[DELETE Attendance SUCCESSFULLY]');
    callback(true);
  });
};