var getUser = require('../model/getUsers'),
    getEmployee = require('../model/getEmployee'),
    getAttendance = require('../model/getAttendance'),
    getContracts = require('../model/getContracts'),
    getDepartment = require('../model/getDepartment'),
    getEmployeeChange = require('../model/getEmployeeChange'),
    getRewards = require('../model/getRewards'),
    getTraining = require('../model/getTraining'),
    login = require('../model/login'),
    newAttendance = require('../model/newAttendance'),
    newContract = require('../model/newContract'),
    newDepartment = require('../model/newDepartment'),
    newEmployee = require('../model/newEmployee'),
    newEmployeeChange = require('../model/newEmployeeChange'),
    newReward = require('../model/newReward'),
    newTraining = require('../model/newTraining');

module.exports = {
  'GET /GetUser': async (ctx, next) => {
    console.log(getUser());
    //ctx.response.body = ;
  },
  'GET /GetEmployee': async (ctx, next) => {
    ctx.response.body = getEmployee();
  },
  'GET /GetEmployeeChange': async (ctx, next) => {
    ctx.response.body = getEmployeeChange();
  },
  'GET /GetAttendance': async (ctx, next) => {
    ctx.response.body = getAttendance();
    next();
  },
  'GET /GetContracts': async (ctx, next) => {
    ctx.response.body = getContracts();
  },
  'GET /GetDepartment': async (ctx, next) => {
    ctx.response.body = getDepartment();
  },
  'GET /GetRewards': async (ctx, next) => {
    ctx.response.body = getRewards();
  },
  'GET /GetTraining': async (ctx, next) => {
    ctx.response.body = getTraining();
  },
  'POST /newAttendance': async (ctx, next) => {
    var data = ctx.request.body;
    ctx.response.body = newAttendance(data.eid, data.away, data.bdate, data.edate);
  },
  'POST /newContracts': async (ctx, next) => {
    var data = ctx.request.body;
    ctx.response.body = newContract(data.eid, data.salary, data.bdate, data.edate);
  },
  'POST /newDepartment': async (ctx, next) => {
    var data = ctx.request.body;
    ctx.response.body = newDepartment(data.name);
  },
  'POST /newEmployee': async (ctx, next) => {
    var data = ctx.request.body;
    ctx.response.body = newEmployee(data.name, data.birth, data.sex,
      data.hometown, data.body, data.departemnt);
  },
  'POST /newEmployeeChange': async (ctx, next) => {
    var data = ctx.request.body;
    ctx.response.body = newEmployeeChange(data.eid, data.cway,
      data.cdate, data.tdid, data.fdid);
  },
  'POST /newRewards': async (ctx, next) => {
    var data = ctx.request.body;
    ctx.response.body = newReward(data.eid, data.rreason,
      data.rway, data.rdate, data.rmoney);
  },
  'POST /newTraining': async (ctx, next) => {
    var data = ctx.request.body;
    ctx.response.body = newTraining(data.eid, data.way,
      data.bdate, data.edate);
  }
};