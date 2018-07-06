var mysql = require('./connection');
var md5 = require('md5');

module.exports = (name, birth, sex, hometown, body, department, callback) => {

  var sql = 'INSERT INTO Employee(ename, ebirth, status, esex, ehometown, ebody) VALUES(?,?,?,?,?,?)';
  var sqlParams = [name, birth, 1, sex, hometown, body];
  mysql.query(sql, sqlParams, function (err, result) {
    if (err) {
      console.log('[INSERT ERROR] - ', err.message);

      callback(false);
    }
    console.log('[INSERT INTO Employee SUCCESSFULLY]');


    sql = 'INSERT INTO EmployeeChange(eid, cdate, tdid) (SELECT eid, NOW(), did FROM (SELECT eid, did, dname FROM Employee JOIN Department) AS tb WHERE tb.dname = ? ORDER BY tb.eid DESC LIMIT 1)';
    sqlParams = [department];
    mysql.query(sql, sqlParams, function (err, result) {
      if (err) {
        console.log('[INSERT ERROR] - ', err.message);
        mysql.end();
        callback(false);
      }
      console.log('[INSERT EmployeeChange SUCCESSFULLY]');

      
      sql = 'INSERT INTO EmployeeInDepartment (SELECT eid, did FROM (SELECT eid, did, dname FROM Employee JOIN Department) AS tb WHERE tb.dname = ? ORDER BY tb.eid DESC LIMIT 1)';
      if (department != "") {
        mysql.query(sql, sqlParams, function (err, result) {
          if (err) {
            console.log('[INSERT ERROR] - ', err.message);

            callback(false);
          }
          console.log('[INSERT INTO EmployeeInDepartment SUCCESSFULLY]');


          sql = 'INSERT INTO User(username, password, uright) VALUE(?,?,?)';
          var username = name;
          var password = md5("123456");
          sqlParams = [username, password, 2];
          mysql.query(sql, sqlParams, function (err, result) {
            if (err) {
              console.log('[INSERT ERROR] - ', err.message);
              callback(false);
            }
            console.log('[INSERT INTO User SUCCESSFULLY]');
            callback(true);
          });
        });
      }
    });
  });
};
