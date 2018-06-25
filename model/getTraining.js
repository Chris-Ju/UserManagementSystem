var mysql = require('./connection');


module.exports = () => {
  mysql.connect();
  var sql = 'SELECT tid, ename, TW.name, bdate, edate FROM Employee E, Training T, TrainingWay TW where T.way = TW.way and E.eid = T.eid';
  var data = [];
  mysql.query(sql, function (err, result) {
    if (err) {
      console.log('[QUERY ERROR] - ', err.message);
      mysql.end();
      return false;
    }
    data = result;
    console.log('[QUERY Training SUCCESSFULLY]');
  });
  mysql.end();
  return data;
};