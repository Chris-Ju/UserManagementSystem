var mysql = require('./connection');

module.exports = (eid, salary, bdate, edate, callback) => {
  var sql = 'UPDATE Contracts SET salary = ?, bdate = ?, edate = ? where eid = ?';
  var sqlParams = [salary, bdate, edate, eid];
  if (edate == "") {
    sql = 'UPDATE Contracts SET salary = ?, bdate = ? where eid = ?';
    sqlparamas = [salary, bdate, eid];
  }

  mysql.query(sql, sqlParams, function (err, result) {
    if (err) {
      console.log('[UPDATE ERROR] - ', err.message);
      
      callback(false);
    }
    console.log('[UPDATE Contracts SUCCESSFULLY]');
    
    callback(true);
  });
};