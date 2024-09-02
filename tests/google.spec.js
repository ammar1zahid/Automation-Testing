const{test,expect} = require("@playwright/test")

test("Verify application start",async function({page}){

   await page.goto("http://google.com")

   const url = await page.url()
    
   console.log("Url: ",url)

   const title = await page.title()

    console.log("title: ",title)

    // we call these statements Assertions
  await expect(page).toHaveTitle("Google")

})