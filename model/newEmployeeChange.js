var mysql = require('./connection');

module.exports = (eid, cway, cdate, tdid, fdid, callback) => {

  var sql = 'INSERT INTO EmployeeChange(eid, cway, cdate, tdid, fdid) VALUES(?,?,?,?,?)';
  var sqlParams = [eid, cway, cdate, tdid, fdid];
  msql.query(sql, sqlParams, function (err, result) {
    if (err) {
      console.log('[INSERT ERROR] - ', err.message);

      callback(false);
    }
    console.log('[INSERT EmployeeChange SUCCESSFULLY]');

    callback(true);
  });
};
