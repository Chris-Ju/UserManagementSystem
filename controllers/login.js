var db = require('../model/db');

module.exports = {
  'POST /signin': async (ctx, next) => {
    var
      username = ctx.request.body.username || '',
      password = ctx.request.body.password || '';
    if (db.login(username, password)) {
      console.log('signin ok!');
      ctx.response.body = "True";
    } else {
      console.log('signin failed!');
      ctx.response.body = "False";
    }
  }
};