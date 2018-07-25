const { authenticate, isAdmin } = require("../utils/middleware");
const { employeeLogin } = require("../controllers/employeeLogin");
const { login } = require("../controllers/employerLogin");

const {
  createEmployer,
  getEmployer,
  editEmployerPassword
} = require("../controllers/Employer");

const {
  createEmployee,
  getEmployees,
  getOneEmployee,
  editEmployee,
  deleteEmployee,
  editEmployeePassword
} = require("../controllers/Employee");

const {
  createSchedule,
  getSchedule,
  getEmpsSched
} = require("../controllers/schedule");

module.exports = server => {

  //--------------------------Employer Routes--------------------------//
  // create an employer
  server.route("/api/register").post(createEmployer);
  // login an employer
  server.route("/api/employerLogin").post(login);

  // creating an employee
  server.route("/api/:id/createEmployee").post(authenticate, isAdmin, createEmployee);
  
  // editing an employee
  server.route("/api/editEmployee/:id").put(authenticate, isAdmin, editEmployee);
  
  // deleting an employee
  server.route("/api/deleteEmployee/:id").delete(authenticate, isAdmin, deleteEmployee);
  
  // editing the employer's password
  server.route("/api/:id/editPassword").put(authenticate, isAdmin, editEmployerPassword);
  
  // get all the employees and their data
  server.route("/api/:id/employees").get(authenticate, isAdmin, getEmployees);

  // Employer settings
  server.route("/api/employer/:id").get(authenticate, isAdmin, getEmployer);

  // create a schedule for an employee
  // server.route("/api/:id/createSchedule")

  // get the schedule of every employee
  server.route("/api/:id/schedule").get(authenticate, isAdmin, getEmpsSched);
  
  //--------------------------Employee Routes--------------------------//
  // Employee login
  server.route("/api/employeeLogin").post(employeeLogin);
  
  // get the employee's data and schedule
  server.route("/api/employee/:id").get(authenticate, getOneEmployee);

  // editing the employee's password
  server.route("/api/employee/:id/editPassword").put(authenticate, editEmployeePassword);

};
