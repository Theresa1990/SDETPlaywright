const {test, expect} = require('@playwright/test');
const { AddEmployee } = require('../PageObject/AddEmployee');
const {LoginPage} = require('../PageObject/LoginPage');
const dataset=JSON.parse(JSON.stringify(require("../Utils/Logindata.json")));
const Empdataset=JSON.parse(JSON.stringify(require("../Utils/Empdata.json")));

test.only('Add Employee', async({browser})=>
{
const context=await browser.newContext();
const page=await context.newPage();
const loginPage = new LoginPage(page);
const addEmployee= new AddEmployee(page);

//loginPage.goto();
//loginPage.validLogin(dataset.username,dataset.password);
addEmployee.EmployeeDetails(Empdataset.FirstName,Empdataset.LastName,Empdataset.EmailAddress,Empdataset.PhoneNumber,Empdataset.Month,Empdataset.Year,Empdataset.date);
addEmployee.validateEmployees(Empdataset.FirstName,Empdataset.LastName,Empdataset.EmailAddress,Empdataset.PhoneNumber,Empdataset.Month,Empdataset.Year,Empdataset.date);

await page.pause();

});