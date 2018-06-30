var mysql = require('./connection');


module.exports = async () => {
  await mysql.connect();
  var sql = 'SELECT username, uright FROM User';
  var data = [];
  await mysql.query(sql, function (err, result) {
    if (err) {
      console.log('[QUERY ERROR] - ', err.message);
      mysql.end();
      return false;
    }
    data = result;
    console.log('[QUERY User SUCCESSFULLY]');
  });
  await mysql.end();
  return data;
};