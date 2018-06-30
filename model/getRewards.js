var mysql = require('./connection');

module.exports = (callback) => {
  mysql.connect();
  var sql = 'SELECT rid, ename, rreason, RW.name, rdate, rmoney FROM Employee E, Rewards R, RewardsWay RW where R.rway = RW.way and E.eid = R.eid';
  mysql.query(sql, function (err, result) {
    if (err) {
      console.log('[QUERY ERROR] - ', err.message);
      mysql.end();
      callback(false);
    }
    console.log('[QUERY Rewards SUCCESSFULLY]');
    mysql.end();
    callback(data);
  });
};