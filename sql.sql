create database UMS;
use UMS;

create table Employee(
  eid int not null auto_increment,
  ename char(255) not null,
  ebirth date not null,
  status int not null,
  esex char(1) default "M" check(sex = "M" or sex = "F"),
  ehometown char(255),
  ebody char(255),
  primary key(eid)
) auto_increment = 0;

create table Department(
  did int not null auto_increment,
  dname char(255) not null,
  dmanager int,
  foreign key(dmanager) references Employee(eid),
  primary key(did)
) auto_increment = 0;

create table EmployeeInDepartment(
  eid int not null,
  did int not null,
  primary key(eid, did),
  foreign key(eid) references Employee(eid) on delete cascade,
  foreign key(did) references Department(did) on delete cascade
);

create table EmployeeChange(
  cid int not null auto_increment,
  eid int not null,
  cway int not null default 1,
  cdate date not null,
  tdid int,
  fdid int,
  primary key(cid)
) auto_increment = 1;

create table Contracts(
  cid int not null auto_increment,
  eid int not null,
  salary int not null,
  bdate date not null,
  edate date,
  primary key(cid),
  foreign key(eid) references Employee(eid)
) auto_increment = 1;

create table Attendance(
  aid int not null auto_increment,
  eid int not null,
  away int not null,
  bdate date not null,
  edate date,
  primary key(aid),
  foreign key(eid) references Employee(eid)
) auto_increment = 1;

create table Rewards(
  rid int not null auto_increment,
  eid int not null,
  rreason char(255) not null,
  rway int not null,
  rdate date not null,
  rmoney int not null,
  primary key(rid),
  foreign key(eid) references Employee(eid)
) auto_increment = 1;

create table Training(
  tid int not null auto_increment,
  eid int not null,
  way int not null,
  bdate date not null,
  edate date not null,
  primary key(tid),
  foreign key(eid) references Employee(eid)
) auto_increment = 1;

create table User(
  uid int not null auto_increment,
  username char(20) not null,
  password char(255) not null,
  uright int not null,
  primary key(uid)
) auto_increment = 1;

create table TrainingWay(
  way int not null,
  name char(20) not null
);

create table RewardsWay(
  way int not null,
  name char(20) not null
);

create table AttendanceWay(
  way int not null,
  name char(20) not null
);

create table EmployeeChangeWay(
  way int not null,
  name char(20) not null
);

create table EmployeeStatus(
  status int not null,
  name char(20) not null
);

insert into EmployeeStatus value(1, "in-service");
insert into EmployeeStatus value(2, "departure");

insert into TrainingWay value(1, "student");
insert into TrainingWay value(2, "teacher");

insert into RewardsWay value(1, "bonus");
insert into RewardsWay value(2, "fine");

insert into AttendanceWay value(1, "leave");
insert into AttendanceWay value(2, "completion");
insert into AttendanceWay value(3, "overtime");

insert into EmployeeChangeWay value(1, "take office");
insert into EmployeeChangeWay value(2, "departure");
insert into EmployeeChangeWay value(3, "transfer department");

insert into Department(did, dname) value(0, "NULL");
insert into Employee(eid, ename, ebirth, status) value(0, "NULL", "0000-01-01", 1);



