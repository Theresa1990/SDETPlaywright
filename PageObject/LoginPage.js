// This script will Login and proceed with click to add an employee

const { expect } = require("@playwright/test");

class LoginPage{
    constructor(page)
    {
        this.page=page;     
        this.loginButton =  page.getByRole("button",{name:'Login'});
        this.username= page.locator('#username');
        this.password= page.locator('#password');
        this.Employee=page.getByTestId('sideBar').getByRole('link', { name: 'Employees' });
        this.Addemployee=page.getByRole('button', { name: 'Add employee' });   
    }
    async goto(){
        await  this.page.goto("https://sandbox-login.brighthr.com/login/")
    }
    async validLogin(username,password)
    {
         this.username.fill(username);
         this.password.fill(password);
         await expect(this.loginButton).toBeVisible().click();
         

    }
    async Click_EmpLink(){
     await expect(this.Employee).toBeVisible().click();   
   


    }
    async AddEmployee(){
        await expect( this.Addemployee).toBeVisible().click();
    }
    
}
module.exports= {LoginPage};