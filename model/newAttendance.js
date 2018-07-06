var mysql = require('./connection');

module.exports = (eid, away, bdate, edate, callback) => {

  var sql = 'INSERT INTO Attendance(eid, away, bdate, edate) VALUES(?,?,?,?)';
  var sqlParams = [eid, away, bdate, edate];
  if (edate == "") {
    sql = 'INSERT INTO Attendance(eid, away, bdate) VALUES(?,?,?)';
    sqlparamas = [eid, away, bdate];
  }
  mysql.query(sql, sqlParams, function (err, result) {
    if (err) {
      console.log('[INSERT ERROR] - ', err.message);

      callback(false);
    }
    console.log('[INSERT INTO Attendance SUCCESSFULLY]');

    callback(result);
  });
};
