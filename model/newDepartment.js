var mysql = require('./connection');

module.exports = (name, eid, callback) => {

  var sql = 'INSERT INTO Department(dname, dmanager) VALUES(?, ?)';
  var sqlParams = [name, eid];
  mysql.query(sql, sqlParams, function (err, result) {
    if (err) {
      console.log('[INSERT ERROR] - ', err.message);
      callback(false);
    }
    console.log('[INSERT Department SUCCESSFULLY]');

    callback(true);
  });
};
