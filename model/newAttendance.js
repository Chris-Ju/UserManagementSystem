var mysql = require('./connection');

module.exports = (eid, away, bdate, edate) => {
  mysql.connect();
  var sql = 'INSERT INTO Contracts(eid, away, bdate, edate) VALUES(?,?,?,?)';
  var sqlparamas = [eid, away, bdate, edate];
  if (edate == "") {
    sql = 'INSERT INTO Attendance(eid, away, bdate) VALUES(?,?,?)';
    sqlparamas = [eid, away, bdate];
  } 

  mysql.query(sql, sqlParams, function (err, result) {
    if (err) {
      console.log('[INSERT ERROR] - ', err.message);
      mysql.end();
      return false;
    }
    console.log('[INSERT INTO Attendance SUCCESSFULLY]');
  });
  mysql.end();
  return true;
};