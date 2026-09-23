const {test, expect} = require('@playwright/test');
const {LoginPage} = require('../PageObject/LoginPage');
const {addEmployee, AddEmployee} = require('../PageObject/AddEmployee');


const dataset=JSON.parse(JSON.stringify(require("../Utils/Logindata.json")));
const Empdataset=JSON.parse(JSON.stringify(require("../Utils/Empdata.json")));

test.only('Login test', async({browser})=>
{
const context=await browser.newContext();
const page=await context.newPage();
const loginPage = new LoginPage(page);
const addEmployee=new AddEmployee(page);



loginPage.goto();
loginPage.validLogin(dataset.username,dataset.password);
loginPage.Click_EmpLink ();
loginPage.AddEmployee();
addEmployee.EmployeeDetails((Empdataset.FirstName,Empdataset.LastName,Empdataset.EmailAddress,Empdataset.PhoneNumber,Empdataset.Month,Empdataset.JobDetails));
addEmployee.validateEmployee((Empdataset.FirstName,Empdataset.LastName,Empdataset.JobDetails));












await page.pause();

});