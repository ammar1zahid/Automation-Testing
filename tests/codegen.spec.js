import { test, expect } from '@playwright/test';

//file created by codegen , code autogenerated

//command
//providing file name with -o 
//npx playwright codegen https://customer.ntgs.pk/login -o ./tests/codegen.spec.js 


//for retrying a test we can use retry attribute
// pass no. of retries in comman
//npx playwright test ./tests/codegen.spec.js --headed   --retries 2
//or adjust retry setting in config file


test('test', async ({ page }) => {
  await page.goto('https://customer.ntgs.pk/login');

  await page.getByPlaceholder('Enter your email').fill('ammar@mail.com');
  
  await page.getByPlaceholder('Enter your password').fill('123456');

  await page.getByRole('button', { name: 'Sign In' }).click();

  await page.getByRole('button', { name: 'Company xyz user avatar' }).click();

  await page.getByRole('link', { name: ' Logout' }).click();
});