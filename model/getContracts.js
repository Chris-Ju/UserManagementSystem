var mysql = require('./connection');

module.exports = (callback) => {
  mysql.connect();
  var sql = 'SELECT cid, ename, salary, bdate, edate FROM Employee E, Contracts C WHERE E.eid = C.eid';
  mysql.query(sql, function (err, result) {
    if (err) {
      console.log('[QUERY ERROR] - ', err.message);
      mysql.end();
      callback(false);
    }
    mysql.end();
    console.log('[QUERY Contracts SUCCESSFULLY]');
    callback(result);
  });
};