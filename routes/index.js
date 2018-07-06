var express = require('express');
var db = require('../model/db');
var bodyParser = require('body-parser');
var router = express.Router();

/* GET home page. */

router.post('/signin', (req, res, next) => {
  var data = req.body;
  db.login(data.username, data.password, (result) => {
    res.status(200);
    res.send(result);
  });
});

router.get('/GetUser', (req, res, next) => {
  db.getUser((result) => {
    res.status(200);
    res.send(result);
  });
});

router.get('/GetEmployee', (req, res, next) => {
  db.getEmployee((result) => {
    res.status(200);
    res.send(result);
  });
});

router.get('/GetEmployeeChange', (req, res, next) => {
  db.getEmployeeChange((result) => {
    res.status(200);
    res.send(result);
  });
});

router.get('/GetAttendance', (req, res, next) => {
  db.getAttendance((result) => {
    res.status(200);
    res.send(result);
  });
});

router.get('/GetContracts', (req, res, next) => {
  db.getContracts((result) => {
    res.status(200);
    res.send(result);
  });
});

router.get('/GetDepartment', (req, res, next) => {
  db.getDepartment((result) => {
    res.status(200);
    res.send(result);
  });
});

router.get('/GetRewards', (req, res, next) => {
  db.getRewards((result) => {
    res.status(200);
    res.send(result);
  });
});

router.get('/GetTraining', (req, res, next) => {
  db.getTraining((result) => {
    res.status(200);
    res.send(result);
  });
});

router.post('/newAttendance', (req, res, next) => {
  var data = req.body;
  db.newAttendance(data.eid, data.away, data.bdate, data.edate, (result) => {
    res.status(200);
    res.send(result);
  });
});

router.post('/newContract', (req, res, next) => {
  var data = req.body;
  db.newContract(data.eid, data.salary, data.bdate, data.edate, (result) => {
    res.status(200);
    res.send(result);
  });
});

router.post('/newDepartment', (req, res, next) => {
  var data = req.body;
  db.newDepartment(data.name, (result) => {
    res.status(200);
    res.send(result);
  });
});

router.post('/newEmployee', (req, res, next) => {
  var data = req.body;
  db.newEmployee(data.name, data.birth, data.sex, data.hometown, data.body, data.department, (result) => {
    res.status(200);
    res.send(result);
  });
});

router.post('/newEmployeeChange', (req, res, next) => {
  var data = req.body;
  db.newEmployeeChange(data.eid, data.cway, data.cdate, data.tdid, data.fdid, (result) => {
    res.status(200);
    res.send(result);
  });
});

router.post('/newReward', (req, res, next) => {
  var data = req.body;
  db.newReward(data.eid, data.rreason, data.rway, data.rdate, data.rmoney, (result) => {
    res.status(200);
    res.send(result);
  });
});

router.post('/newTraining', (req, res, next) => {
  var data = req.body;
  db.newTraining(data.eid, data.way, data.bdate, data.edate, (result) => {
    res.status(200);
    res.send(result);
  });
});


router.put('/updateContract', (req, res, next) => {
  var data = req.body;
  db.updateContract(data.eid, data.salary, data.bdate, data.edate, (result) => {
    res.status(200);
    res.send(result);
  });
});

router.put('/updateDepartment', (req, res, next) => {
  var data = req.body;
  db.updateDepartment(data.did, data.name, (result) => {
    res.status(200);
    res.send(result);
  });
});

router.put('/updateEmployee', (req, res, next) => {
  var data = req.body;
  db.updateEmployee(data.eid, data.name, data.birth, data.hometown, data.body, (result) => {
    res.status(200);
    res.send(result);
  });
});

router.put('/updateReward', (req, res, next) => {
  var data = req.body;
  db.updateReward(data.eid, data.rreason, data.rway, data.rdate, data.rmoney, (result) => {
    res.status(200);
    res.send(result);
  });
});

router.put('/updateTraning', (req, res, next) => {
  var data = req.body;
  db.updateTraining(data.eid, data.way, data.bdate, data.edate, (result) => {
    res.status(200);
    res.send(result);
  });
});

module.exports = router;
