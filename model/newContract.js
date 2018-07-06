var mysql = require('./connection');

module.exports = (eid, salary, bdate, edate, callback) => {
  var sql = 'INSERT INTO Contracts(eid, salary, bdate, edate) VALUES(?,?,?,?)';
  var sqlParams = [eid, salary, bdate, edate];
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
