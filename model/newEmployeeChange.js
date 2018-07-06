var mysql = require('./connection');

module.exports = (eid, cway, cdate, tdid, fdid, callback) => {

  var sql = 'INSERT INTO EmployeeChange(eid, cway, cdate, tdid, fdid) VALUES(?,?,?,?,?)';
  var sqlParams = [eid, cway, cdate, tdid, fdid];
  mysql.query(sql, sqlParams, function (err, result) {
    if (err) {
      console.log('[INSERT ERROR] - ', err.message);

      callback(false);
    }
    console.log('[INSERT EmployeeChange SUCCESSFULLY]');
  });
  if (cway == 1) {
    callback(true);
  }
  if (cway == 2) {
    sql = 'UPDATE Employee SET status = ? where eid = ?';
    sqlParams = [2, eid];
    mysql.query(sql, sqlParams, function (err, result) {
      if (err) {
        console.log('[UPDATE ERROR] - ', err.message);

        callback(false);
      }
      console.log('[UPDATE Employee SUCCESSFULLY]');
      callback(true);
    });
    sql = 'UPDATE EmployeeInDepartment SET did = 0 where eid = ?';
    sqlParams = [eid];
    mysql.query(sql, sqlParams, function (err, result) {
      if (err) {
        console.log('[UPDATE ERROR] - ', err.message);

        callback(false);
      }
      console.log('[UPDATE EmployeeInDepartment SUCCESSFULLY]');
      callback(true);
    });
  } else if (cway == 3) {
    sql = 'UPDATE EmployeeInDepartment SET did = ? where eid = ?';
    sqlParams = [tdid, eid];
    mysql.query(sql, sqlParams, function (err, result) {
      if (err) {
        console.log('[UPDATE ERROR] - ', err.message);

        callback(false);
      }
      console.log('[UPDATE EmployeeInDepartment SUCCESSFULLY]');
      callback(true);
    });
  }
};