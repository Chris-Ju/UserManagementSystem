var mysql = require('./connection');

var conn;

module.exports = () => {
  mysql()
    .then((connect) => {
      conn = connect;
      var sql = 'SELECT username, uright FROM User';
      var data = [];
      coon.query(sql, function (err, result) {
          if (err) {
            console.log('[QUERY ERROR] - ', err.message);
            coon.end();
            return false;
          }
          data = result;
          console.log('[QUERY User SUCCESSFULLY]');
        })
        .then(() => {
          coon.end();
          return data;
        });
    });
};