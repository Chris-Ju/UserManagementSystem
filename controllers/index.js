var db = require('../model/db');


module.exports = {
  'GET /GetUser': ctx => {
    ctx.response.body = db.getUser();
  },
  'GET /GetEmployee': ctx => {
    ctx.response.body = db.getEmployee();
  },
  'GET /GetEmployeeChange': ctx => {
    ctx.response.body = db.getEmployeeChange();
  },
  'GET /GetAttendance': ctx => {
    ctx.response.body = db.getAttendance();
  },
  'GET /GetContracts': ctx => {
    ctx.response.body = db.getContracts();
  },
  'GET /GetDepartment': ctx => {
    ctx.response.body = db.getDepartment();
  },
  'GET /GetRewards': ctx => {
    ctx.response.body = db.getRewards();
  },
  'GET /GetTraining': ctx => {
    ctx.response.body = db.getTraining();
  },
  'POST /newAttendance': ctx => {
    var data = ctx.request.body;
    ctx.response.body = db.newAttendance(data.eid, data.away, data.bdate, data.edate);
  },
  'POST /newContracts': ctx => {
    var data = ctx.request.body;
    ctx.response.body = db.newContract(data.eid, data.salary, data.bdate, data.edate);
  },
  'POST /newDepartment': ctx => {
    var data = ctx.request.body;
    ctx.response.body = db.newDepartment(data.name);
  },
  'POST /newEmployee': ctx => {
    var data = ctx.request.body;
    ctx.response.body = db.newEmployee(data.name, data.birth, data.sex,
      data.hometown, data.body, data.departemnt);
  },
  'POST /newEmployeeChange': ctx => {
    var data = ctx.request.body;
    ctx.response.body = db.newEmployeeChange(data.eid, data.cway,
      data.cdate, data.tdid, data.fdid);
  },
  'POST /newRewards': ctx => {
    var data = ctx.request.body;
    ctx.response.body = db.newReward(data.eid, data.rreason,
      data.rway, data.rdate, data.rmoney);
  },
  'POST /newTraining': ctx => {
    var data = ctx.request.body;
    ctx.response.body = db.newTraining(data.eid, data.way,
      data.bdate, data.edate);
  }
};