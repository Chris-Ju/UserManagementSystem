var mysql = require('./connection');

module.exports = (eid, way, bdate, edate, callback) => {

  var sql = 'INSERT INTO Training(eid, way, bdate, edate) VALUES(?,?,?,?)';
  var sqlParams = [eid, way, bdate, edate];
  mysql.query(sql, sqlParams, function (err, result) {
    if (err) {
      console.log('[INSERT ERROR] - ', err.message);
      
      callback(false);
    }
    console.log('[INSERT INTO Training SUCCESSFULLY]');
    
    callback(true);
  });
};
