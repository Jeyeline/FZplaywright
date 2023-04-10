import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
{
  test('has title', async ({}) => {
    const browser =await chromium.launch()
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.waitForTimeout(5000)
    await expect(page).toHaveURL(/dashboard/);

 await page.goto("https://uatcontainer.quiklyz.com")
  await page.locator('#mat-dialog-0').getByText('Mumbai').click();
  await page.getByRole('button', { name: 'Login ' }).click();
  await page.getByRole('button', { name: 'Login', exact: true }).click();
  await page.getByRole('textbox', { name: 'Enter Mobile Number' }).click();
  await page.getByRole('textbox', { name: 'Enter Mobile Number' }).fill('9126203542');
  await page.getByRole('button', { name: 'Get OTP' }).click();
  await page.locator('.form-control').first().fill('1');
  await page.locator('div:nth-child(2) > .form-control').first().fill('2');
  await page.locator('div:nth-child(3) > .form-control').first().fill('3');
  await page.locator('div:nth-child(4) > .form-control').first().fill('4');
  await page.locator('div:nth-child(5) > .form-control').first().fill('5');
  await page.locator('div:nth-child(6) > .form-control').first().fill('6');
  await page.goto('https://uatcontainer.quiklyz.com/car-leasing/check-eligibility');
});

});