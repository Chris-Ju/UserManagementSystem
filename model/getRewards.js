var mysql = require('./connection');

module.exports = () => {
  mysql.connect();
  var sql = 'SELECT rid, ename, rreason, RW.name, rdate, rmoney FROM Employee E, Rewards R, RewardsWay RW where R.rway = RW.way and E.eid = R.eid';
  var data = [];
  mysql.query(sql, function (err, result) {
    if (err) {
      console.log('[QUERY ERROR] - ', err.message);
      mysql.end();
      return false;
    }
    data = result;
    console.log('[QUERY User SUCCESSFULLY]');
  });
  mysql.end();
  return data;
};