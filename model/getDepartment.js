var mysql = require('./connection');

module.exports = (callback) => {

  var sql = 'SELECT did, dname, ename from Department D, Employee E where E.eid = D.dmanager';
  mysql.query(sql, function (err, result) {
    if (err) {
      console.log('[QUERY ERROR] - ', err.message);
      
      callback(false);
    }
    console.log('[QUERY Department SUCCESSFULLY]');
    
    callback(result);
  });
};