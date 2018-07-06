var mysql = require('./connection');

module.exports = (eid, way, bdate, edate, callback) => {

  var sql = 'UPDATE Training SET way = ?, bdate = ?, edate = ? where eid = ?';
  var sqlParams = [way, bdate, edate, eid];
  mysql.query(sql, sqlParams, function (err, result) {
    if (err) {
      console.log('[UPDATE ERROR] - ', err.message);
      
      callback(false);
    }
    console.log('[UPDATE Training SUCCESSFULLY]');
    
    callback(true);
  });
};
