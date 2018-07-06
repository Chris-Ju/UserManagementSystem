var mysql_1 = require('./connection');
var mysql_2 = require('./connection');
var mysql_3 = require('./connection');
var mysql_4 = require('./connection');
var md5 = require('md5');

module.exports = (name, birth, sex, hometown, body, department, callback) => {

  var sql_1 = 'INSERT INTO Employee(ename, ebirth, status, esex, ehometown, ebody) VALUES(?,?,?,?,?,?)';
  var sqlParams_1 = [name, birth, 1, sex, hometown, body];
  mysql_1.query(sql_1, sqlParams_1, function (err, result) {
    if (err) {
      console.log('[INSERT ERROR] - ', err.message);
      callback(false);
    }
    console.log('[INSERT INTO Employee SUCCESSFULLY]');
  });
  var sql_2 = 'INSERT INTO EmployeeChange(eid, cdate, tdid) (SELECT eid, NOW(), did FROM (SELECT eid, did, dname FROM Employee JOIN Department) AS tb WHERE tb.dname = ? ORDER BY tb.eid DESC LIMIT 1)';
  var sqlParams_2 = [department];
  mysql_2.query(sql_2, sqlParams_2, function (err, result) {
    if (err) {
      console.log('[INSERT ERROR] - ', err.message);
      callback(false);
    }
    console.log('[INSERT INTO EmployeeChange SUCCESSFULLY]');

  });
  var sql_3 = 'INSERT INTO EmployeeInDepartment (SELECT eid, did FROM (SELECT eid, did, dname FROM Employee JOIN Department) AS tb WHERE tb.dname = ? ORDER BY tb.eid DESC LIMIT 1)';
  mysql_3.query(sql_3, sqlParams_2, function (err, result) {
    if (err) {
      console.log('[INSERT ERROR] - ', err.message);
      callback(false);
    }
    console.log('[INSERT INTO EmployeeInDepartment SUCCESSFULLY]');

  });
  var sql_4 = 'INSERT INTO User(username, password, uright) VALUE(?,?,?)';
  var username = name;
  var password = md5("123456");
  var sqlParams_4 = [username, password, 2];
  mysql_4.query(sql_4, sqlParams_4, function (err, result) {
    if (err) {
      console.log('[INSERT ERROR] - ', err.message);
      callback(false);
    }
    console.log('[INSERT INTO User SUCCESSFULLY]');
 
    callback(true);
  });
};
