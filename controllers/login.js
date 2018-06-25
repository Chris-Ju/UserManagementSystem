var login = require('../model/login');

module.exports = {
  'POST /signin': async (ctx, next) => {
    var
      username = ctx.request.body.username || '',
      password = ctx.request.body.password || '';
    if (login(username, password)) {
      console.log('signin ok!');
      ctx.render('signin-ok.html', {
        title: 'Sign In OK',
        name: 'Mr Node'
      });
    } else {
      console.log('signin failed!');
      ctx.render('signin-failed.html', {
        title: 'Sign In Failed'
      });
    }
  }
};