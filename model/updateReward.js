var mysql = require('./connection');

module.exports = (eid, rreason, rway, rdate, rmoney, callback) => {

  var sql = 'UPDATE Rewards SET rreason = ?, rway = ?, rdate = ?, rmoney = ? where eid = ?';
  var sqlParams = [rreason, rway, rdate, rmoney, eid];
  mysql.query(sql, sqlParams, function (err, result) {
    if (err) {
      console.log('[UPDATE ERROR] - ', err.message);
      
      callback(false);
    }
    console.log('[UPDATE Rewards SUCCESSFULLY]');
    
    callback(true);
  });
};
