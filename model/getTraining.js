var mysql = require('./connection');


module.exports = (callback) => {
  mysql.connect();
  var sql = 'SELECT tid, ename, TW.name, bdate, edate FROM Employee E, Training T, TrainingWay TW where T.way = TW.way and E.eid = T.eid';
  mysql.query(sql, function (err, result) {
    if (err) {
      console.log('[QUERY ERROR] - ', err.message);
      mysql.end();
      callback(false);
    }
    console.log('[QUERY Training SUCCESSFULLY]');
    mysql.end();
    callback(data);
  });
};