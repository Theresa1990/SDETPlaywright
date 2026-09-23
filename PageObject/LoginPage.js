class LoginPage{
    constructor(page)
    {
        this.page=page;     
        this.loginButton =  page.getByRole("button",{name:'Login'});
        this.username= page.locator('#username');
        this.password= page.locator('#password');
        this.Employee=page.getByTestId('sideBar').getByRole('link', { name: 'Employees' });
        this.Addemployee =page.getByRole("button",{name:'Add employee'});
        
    }
    async goto(){
        await  this.page.goto("https://sandbox-login.brighthr.com/login/")
    }
    async validLogin(username,password)
    {
         this.username.fill(username);
         this.password.fill(password);
         await this.loginButton.click();
         

    }
    async Click_EmpLink(){
    await this.Employee.click();


    }
    async AddEmployee(){
        await this.Addemployee.click();
    }
    
}
module.exports= {LoginPage};