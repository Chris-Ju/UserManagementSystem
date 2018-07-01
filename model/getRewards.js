var mysql = require('./connection');

module.exports = (callback) => {

  var sql = 'SELECT rid, ename, rreason, RW.name, rdate, rmoney FROM Employee E, Rewards R, RewardsWay RW where R.rway = RW.way and E.eid = R.eid';
  mysql.query(sql, function (err, result) {
    if (err) {
      console.log('[QUERY ERROR] - ', err.message);
      
      callback(false);
    }
    console.log('[QUERY Rewards SUCCESSFULLY]');
    
    callback(result);
  });
};