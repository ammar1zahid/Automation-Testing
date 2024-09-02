const{test,expect} = require("@playwright/test")

//for verifying error msg by entering invalid password
test("Verify Error Msg", async function({page}){

    await page.goto("https://customer.ntgs.pk/")
    
        //enetering email
        //<input type="text" name="email" id="email" class="form-control" placeholder="Enter your email" aria-label="">
        await page.fill('input[type="text"][id="email"]','ammar@mail.com')


        //entering wrong pw
        //<input type="password" name="password" id="password" class="form-control" placeholder="Enter your password" aria-label="">
        await page.fill('input[type="password"][id="password"]','1234567')//wrong pw

        //clicking sign in btn
        //<button class="btn w100 mt-4 btn-block btn-info">Sign In</button>
        await page.click('button.btn.w100.mt-4.btn-block.btn-info');


        //<div class="alert alert-danger" role="alert">Invalid Login Credentials</div>


        // Wait for the error message to appear
        const errorLocator = page.locator('div.alert.alert-danger'); 
        await errorLocator.waitFor({ state: 'visible' });

        // Get and log the error message text
        const errorMessage = await errorLocator.textContent();
        console.log("Error message is: ", errorMessage);

        // assert the presence of the error message
        await expect(errorLocator).toBeVisible();
        await expect(errorMessage).toContain('Invalid Login Credentials');



})