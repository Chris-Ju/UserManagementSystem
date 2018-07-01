var mysql = require('./connection');

module.exports = (eid, salary, bdate, edate) => {
  var sql = 'INSERT INTO Contracts(eid, salary, bdate, edate) VALUES(?,?,?,?)';
  var sqlparamas = [eid, salary, bdate, edate];
  if (edate == "") {
    sql = 'INSERT INTO Contracts(eid, salary, bdate) VALUES(?,?,?)';
    sqlparamas = [eid, salary, bdate];
  }

  mysql.query(sql, sqlParams, function (err, result) {
    if (err) {
      console.log('[INSERT ERROR] - ', err.message);
      
      callback(false);
    }
    console.log('[INSERT INTO Contracts SUCCESSFULLY]');
    
    callback(true);
  });
};