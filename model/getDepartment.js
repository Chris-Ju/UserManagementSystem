var mysql = require('./connection');

module.exports = (callback) => {

  var sql = "SELECT did, dname, ename from Department D, Employee E where E.eid = D.dmanager or (D.dmanager is null and E.eid = 0 and D.did != 0) ORDER BY did"
  mysql.query(sql, function (err, result) {
    if (err) {
      console.log('[QUERY ERROR] - ', err.message);
      
      callback(false);
    }
    console.log('[QUERY Department SUCCESSFULLY]');
    
    callback(result);
  });
};
