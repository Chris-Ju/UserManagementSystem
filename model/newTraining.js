var mysql = require('./connection');

module.exports = (eid, way, bdate, edate) => {
  mysql.connect();
  var sql = 'INSERT INTO Training(eid, way, bdate, edate) VALUES(?,?,?,?)';
  var sqlparamas = [eid, way, bdate, edate];
  mysql.query(sql, sqlParams, function (err, result) {
    if (err) {
      console.log('[INSERT ERROR] - ', err.message);
      mysql.end();
      return false;
    }
    console.log('[INSERT INTO Training SUCCESSFULLY]');
  });
  mysql.end();
  return true;
};