var mysql = require('./connection');

module.exports = (eid, cway, cdate, tdid, fdid) => {
  mysql.connect();
  var sql = 'INSERT INTO EmployeeChange(eid, cway, cdate, tdid, fdid) VALUES(?,?,?,?,?)';
  var sqlparamas = [eid, cway, cdate, tdid, fdid];
  msql.query(sql, sqlParams, function (err, result) {
    if (err) {
      console.log('[INSERT ERROR] - ', err.message);
      msql.end();
      return false;
    }
    console.log('[INSERT EmployeeChange SUCCESSFULLY]');
  }).then(() => {
    msql.end();
    return true;
  });
};