var mysql = require('./connection');

module.exports = (callback) => {
  mysql.connect();
  var sql = 'SELECT aid, ename, AW.name, bdate, edate FROM Employee E, Attendance A, AttendanceWay AW where A.away = AW.way and E.eid = A.eid';
  mysql.query(sql, function (err, result) {
    if (err) {
      console.log('[QUERY ERROR] - ', err.message);
      mysql.end();
      callback(false);
    }
    mysql.end();
    console.log('[QUERY Attendance SUCCESSFULLY]');
    callback(result);
  });
};