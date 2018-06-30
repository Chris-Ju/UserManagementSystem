var express = require('express');
var db = require('../model/db');
var router = express.Router();

/* GET home page. */
router.get('/GetUser', (req, res, next) => {
  db.getUser((result) => {
    res.status(200);
    res.send(result);
  });
});

/*
  module.exports = {
    'GET /GetEmployee': async (ctx, next) => {
      ctx.response.body = db.getEmployee();
    },
    'GET /GetEmployeeChange': async (ctx, next) => {
      ctx.response.body = db.getEmployeeChange();
    },
    'GET /GetAttendance': async (ctx, next) => {
      ctx.response.body = db.getAttendance();
    },
    'GET /GetContracts': async (ctx, next) => {
      ctx.response.body = db.getContracts();
    },
    'GET /GetDepartment': async (ctx, next) => {
      ctx.response.body = db.getDepartment();
    },
    'GET /GetRewards': async (ctx, next) => {
      ctx.response.body = db.getRewards();
    },
    'GET /GetTraining': async (ctx, next) => {
      ctx.response.body = db.getTraining();
    },
    'POST /newAttendance': async (ctx, next) => {
      var data = ctx.request.body;
      ctx.response.body = db.newAttendance(data.eid, data.away, data.bdate, data.edate);
    },
    'POST /newContracts': async (ctx, next) => {
      var data = ctx.request.body;
      ctx.response.body = db.newContract(data.eid, data.salary, data.bdate, data.edate);
    },
    'POST /newDepartment': async (ctx, next) => {
      var data = ctx.request.body;
      ctx.response.body = db.newDepartment(data.name);
    },
    'POST /newEmployee': async (ctx, next) => {
      var data = ctx.request.body;
      ctx.response.body = db.newEmployee(data.name, data.birth, data.sex,
        data.hometown, data.body, data.departemnt);
    },
    'POST /newEmployeeChange': async (ctx, next) => {
      var data = ctx.request.body;
      ctx.response.body = db.newEmployeeChange(data.eid, data.cway,
        data.cdate, data.tdid, data.fdid);
    },
    'POST /newRewards': async (ctx, next) => {
      var data = ctx.request.body;
      ctx.response.body = db.newReward(data.eid, data.rreason,
        data.rway, data.rdate, data.rmoney);
    },
    'POST /newTraining': async (ctx, next) => {
      var data = ctx.request.body;
      ctx.response.body = db.newTraining(data.eid, data.way,
        data.bdate, data.edate);
    }
  };*/
module.exports = router;