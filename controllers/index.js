var getUser = require('../model/getUsers');

module.exports = {
  'GET /': async (ctx, next) => {
    
  },
  'GET /GetUser': async (ctx, next) => {
    ctx.response.body = getUser();
  }
};