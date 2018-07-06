var mysql = require('./connection');

module.exports = (callback) => {

  var sql = 'SELECT cid, E.ename, CW.name, cdate, D1.dname fname, D2.dname tname FROM Employee E, EmployeeChange C, EmployeeChangeWay CW, Department D1, Department D2 WHERE C.cway = CW.way and E.eid = C.eid and (C.tdid = D1.did or C.tdid is null and D1.did = 0) and (D2.did = 0 and C.fdid is null or D2.did = C.fdid) ORDER BY cid';
  mysql.query(sql, function (err, result) {
    if (err) {
      console.log('[QUERY ERROR] - ', err.message);
      
      callback(false);
    }
    console.log('[QUERY EmployeeChange SUCCESSFULLY]');
    
    callback(result);
  });
};