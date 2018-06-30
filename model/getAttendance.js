var mysql = require('./connection');

module.exports = () => {
  mysql.connect();
  var sql = 'SELECT aid, ename, AW.name, bdate, edate FROM Employee E, Attendance A, AttendanceWay AW where A.away = AW.way and E.eid = A.eid';
  var data = [];
  mysql.query(sql, function (err, result) {
    if (err) {
      console.log('[QUERY ERROR] - ', err.message);
      mysql.end();
      return false;
    }
    data = result;
    console.log('[QUERY Attendance SUCCESSFULLY]');
  }).then(() => {
    mysql.end();
    return data;
  });

};