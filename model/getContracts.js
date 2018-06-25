var mysql = require('./connection');

module.exports = () => {
  mysql.connect();
  var sql = 'SELECT cid, ename, salary, bdate, edate FROM Employee E, Contracts C WHERE E.eid = C.eid';
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