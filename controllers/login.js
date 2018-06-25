var login = require('../model/login');

module.exports = {
  'POST /signin': async (ctx, next) => {
    var
      username = ctx.request.body.username || '',
      password = ctx.request.body.password || '';
    if (login(username, password)) {
      console.log('signin ok!');
      ctx.response.body = "True";
    } else {
      console.log('signin failed!');
      ctx.response.body = "False";
    }
  }
};