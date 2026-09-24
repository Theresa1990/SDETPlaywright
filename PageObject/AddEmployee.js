// This script Adds an employee 
//  Validates the added employees

const { expect } = require("@playwright/test");

class AddEmployee{
    constructor(page)
    {
        this.page=page;
        
        this.FirstName=page.getByRole('textbox', { name: 'First name' });
        this.LastName=page.getByRole('textbox', { name: 'Last name' });
        this.EmailAddress=page.getByRole('textbox', { name: 'Email address' });
        this.PhoneNumber=page.getByRole('textbox', { name: 'Phone number (optional)' });
        this.DateTextbox=page.locator(".react-datepicker-wrapper");
        this.MonthDropdown=page.getByLabel("month").first();
        this.YearDropdown=page.getByLabe("year").first();
        this.date = page.locator('.react-datepicker__month').last();
        this.Jobtitle=page.getByRole('textbox', { name: 'Job title' });
        this.SaveEmployee=page.getByRole('button', { name: 'Save new employee' });
        this.AddAnotherEmp=page.getByRole('button',{name: 'Add another employee'});




        
        


    }

    async EmployeeDetails(FirstName,LastName,EmailAddress,PhoneNumber,MonthValue,Yearvalue,date,Jobtitle){

        
        await this.FirstName.fill(FirstName);
        await this.LastName.fill(LastName);
        await this.EmailAddress.fill(EmailAddress);
        await this.PhoneNumber.fill(PhoneNumber);
        await this.DateTextbox.click();
        await this.MonthDropdown.selectOption(MonthValue);
        await this.YearDropdown.selectOption(Yearvalue);
        const dateCount = await this.date.count();

for (let i = 0; i < dateCount; i++) {

    const dateValue = await this.date.nth(i).innerText();

    if (dateValue === date.toString()) {
        await this.date.nth(i).click();
        break;
    }
}
        await this.Jobtitle.fill(Jobtitle);
        await this.SaveEmployee.click();
        await this.page.waitForSelector('text=Success! New employee added', { state: 'visible' });

        
    }

    async validateEmployees(validationrecord) {

    await this.page.waitForSelector('#main-content div.grid > div',{ timeout: 10000 });

    const HTML_Div = this.page.locator('#main-content div.grid > div');
    const HTML_Div_Count = await HTML_Div.count();

    for (const { First_Name, Last_name, Job_Title } of validationrecord) {

        const target_name = First_Name +" "+ Last_name ;
        const target_job = Job_Title;

        let employeeFound = false;

        for (let Div_Count = 0; Div_Count < HTML_Div_Count; Div_Count++) {

            const Result_Name = await HTML_Div.nth(Div_Count).locator('div.flex.flex-col > h1').innerText();

            const Result_Title = await HTML_Div.nth(Div_Count) .locator('div.flex.flex-col > div').innerText();

            if (
                Result_Name.trim() === target_name.trim() &&
                Result_Title.trim() === target_job.trim()
            ) {

                console.log('Expected Name =', target_name,'Actual Name =', Result_Name );

                console.log('Expected Job =', target_job,'Actual Job =', Result_Title);

                console.log('Employee Found');

                employeeFound = true;
                break;
            }
        }

        if (!employeeFound) {

            console.log("Employee NOT Found", target_name, target_job);
        }
       
    }
     expect(employeeFound).toBe(true);
}

async AddAnotherEmployee(){
    await expect(this.AddAnotherEmp).toBeVisible().click();
    
}



}
module.exports={AddEmployee};
