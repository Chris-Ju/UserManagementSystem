var mysql = require('./connection');

module.exports = () => {
  mysql.connect();
  var sql = 'SELECT E.eid, ename, D.dname, ebirth, ES.name, esex, ehometown, ebody FROM Employee E, EmployeeStatus ES, Department D, EmployeeInDepartment ED where E.status = ES.status and E.eid = ED.eid and ED.did = D.did';
  mysql.query(sql, function (err, result) {
    if (err) {
      console.log('[QUERY ERROR] - ', err.message);
      mysql.end();
      callback(false);
    }
    console.log('[QUERY Employee SUCCESSFULLY]');
    mysql.end();
    callback(data);
  });
};