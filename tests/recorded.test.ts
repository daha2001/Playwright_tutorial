import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.locator('body').click();
  await page.goto("https://ecommerce-playground.lambdatest.io/")
  await page.locator('//*[@id="widget-navbar-217834"]/ul/li[6]/a/div/span').hover()
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByPlaceholder('E-Mail Address').click();
  await page.getByPlaceholder('E-Mail Address').fill('koushik350@gmail.com');
  await page.getByPlaceholder('E-Mail Address').press('Tab');
  await page.getByPlaceholder('Password').fill('Pass123$');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: ' Edit your account information' }).click();
  await page.getByPlaceholder('First Name').click();
  await page.getByPlaceholder('First Name').fill('koushik');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.locator('//*[@id="widget-navbar-217834"]/ul/li[6]/a/div/span').hover()
  await page.getByRole('link', { name: 'Logout', exact: true }).click();
});

/*
npx playwright codegen
*/