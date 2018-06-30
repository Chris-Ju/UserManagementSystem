var mysql = require('./connection');

module.exports = (eid, rreason, rway, rdate, rmoney, callback) => {
  mysql.connect();
  var sql = 'INSERT INTO Rewards(eid, rreason, rway, rdate, rmoney) VALUES(?,?,?,?,?)';
  var sqlparamas = [eid, rreason, rway, rdate, rmoney];
  mysql.query(sql, sqlParams, function (err, result) {
    if (err) {
      console.log('[INSERT ERROR] - ', err.message);
      mysql.end();
      callback(false);
    }
    console.log('[INSERT INTO Rewards SUCCESSFULLY]');
    mysql.end();
    callback(true);
  });
};