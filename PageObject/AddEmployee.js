class AddEmployee{
    constructor(page)
    {
        this.page=page;
        
        this.FirstName=page.getByRole('textbox', { name: 'First name' });
        this.LastName=page.getByRole('textbox', { name: 'Last name' });
        this.EmailAddress=page.getByRole('textbox', { name: 'Email address' });
        this.PhoneNumber=page.getByRole('textbox', { name: 'Phone number (optional)' });
        this.SelectDate=page.locator('#startDate [data-testid="input-selector"]');
        this.Month = page.getByRole('textbox', { name: 'Start date (optional)' });
        this.Jobtitle=this.page.getByRole('textbox', { name: 'Job title' });
        this.SaveEmployee=this.page.getByRole('button', { name: 'Save new employee' });




        
        


    }

    async EmployeeDetails(FirstName,LastName,EmailAddress,PhoneNumber,Month){

        
        await this.FirstName.fill(FirstName);
        await this.LastName.fill(LastName);
        await this.EmailAddress.fill(EmailAddress);
        await this.PhoneNumber.fill(PhoneNumber);
        await this.SelectDate.click();
        await this.Month.click();
        await this.SelectMonth.fill(Month);
        await this.Jobtitle.click();
        await this.SaveEmployee.click();

        


        
        
    }

    async validateEmployees(validationrecord) {

    await this.page.waitForSelector('#main-content div.grid > div',{ timeout: 10000 }
    );

    const HTML_Div = this.page.locator('#main-content div.grid > div');
    const HTML_Div_Count = await HTML_Div.count();

    for (const { First_Name, Last_name, Job_Title } of validationrecord) {

        const target_name = `${First_Name} ${Last_name}`;
        const target_job = Job_Title;

        let employeeFound = false;

        for (let Div_Count = 0; Div_Count < HTML_Div_Count; Div_Count++) {

            const Result_Name = await HTML_Div.nth(Div_Count).locator('div.flex.flex-col > h1').innerText();

            const Result_Title = await HTML_Div.nth(Div_Count) .locator('div.flex.flex-col > div').innerText();

            if (
                Result_Name.trim() === target_name.trim() &&
                Result_Title.trim() === target_job.trim()
            ) {

                console.log(
                    'Expected Name =', target_name,
                    'Actual Name =', Result_Name
                );

                console.log(
                    'Expected Job =', target_job,
                    'Actual Job =', Result_Title
                );

                console.log('Employee Found');

                employeeFound = true;
                break;
            }
        }

        if (!employeeFound) {

            console.log(`Employee NOT Found: ${target_name} - ${target_job}`);
        }
    }
}



}
module.exports={AddEmployee};
