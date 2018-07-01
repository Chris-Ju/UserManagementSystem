var mysql = require('./connection');

module.exports = (callback) => {

  var sql = 'SELECT cid, ename, salary, bdate, edate FROM Employee E, Contracts C WHERE E.eid = C.eid';
  mysql.query(sql, function (err, result) {
    if (err) {
      console.log('[QUERY ERROR] - ', err.message);
      
      callback(false);
    }
    
    console.log('[QUERY Contracts SUCCESSFULLY]');
    callback(result);
  });
};