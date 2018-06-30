var mysql = require('./connection');
var md5 = require('md5');
var pinyin = require('js-pinyin');

module.exports = (name, birth, sex, hometown, body, department, callback) => {
  mysql.connect();
  var sql = 'INSERT INTO Employee(ename, ebirth, status, esex, ehometown, ebody) VALUES(?,?,?,?,?,?)';
  var sqlparamas = [name, birth, 1, sex, hometown, body];
  mysql.query(sql, sqlParams, function (err, result) {
    if (err) {
      console.log('[INSERT ERROR] - ', err.message);
      mysql.end();
      callback(false);
    }
    console.log('[INSERT INTO Employee SUCCESSFULLY]');
  });

  sql = 'INSERT INTO EmployeeChange(eid, cdate, tdid) ((SELECT eid, NOW(), did FROM (SELECT eid, did, dname FROM Employee JOIN Department) AS tb WHERE tb.dname = ? ORDER BY tb.eid DESC LIMIT 1))';
  sqlParams = [department];
  msql.query(sql, sqlParams, function (err, result) {
    if (err) {
      console.log('[INSERT ERROR] - ', err.message);
      msql.end();
      callback(false);
    }
    console.log('[INSERT EmployeeChange SUCCESSFULLY]');
  });

  sql = 'INSERT INTO EmployeeInDepartment (SELECT eid, did FROM (SELECT eid, did, dname FROM Employee JOIN Department) AS tb WHERE tb.dname = ? ORDER BY tb.eid DESC LIMIT 1)';
  sqlparamas = [department];
  if (department != "") {
    mysql.query(sql, sqlParams, function (err, result) {
      if (err) {
        console.log('[INSERT ERROR] - ', err.message);
        mysql.end();
        callback(false);
      }
      console.log('[INSERT INTO EmployeeInDepartment SUCCESSFULLY]');
    });
  }

  pinyin.setOptions({
    checkPolyphone: false,
    charCase: 0
  });
  
  sql = 'INSERT INTO User(username, password) VALUE(?, ?)';
  var username = pinyin.getFullChars(name);
  var password = md5("123456");
  console.log(username);
  sqlparamas = [username, password];
  mysql.query(sql, sqlParams, function (err, result) {
    if (err) {
      console.log('[INSERT ERROR] - ', err.message);
      mysql.end();
      callback(false);
    }
    console.log('[INSERT INTO User SUCCESSFULLY]');
    mysql.end();
    callback(true);
  });

};