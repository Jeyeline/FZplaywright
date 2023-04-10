import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://www.tutorialsninja.com/demo/');
  await page.getByRole('link', { name: 'Tablets' }).click();
  await page.getByRole('link', { name: 'Samsung Galaxy Tab 10.1' }).first().click();
  await page.getByLabel('Qty').click();
  await page.getByLabel('Qty').fill('2');
  await page.getByRole('button', { name: 'Add to Cart' }).click();
  await page.getByRole('button', { name: ' 2 item(s) - $483.98' }).click();
  await page.getByRole('link', { name: ' View Cart' }).click();
  await page.getByRole('link', { name: 'Checkout', exact: true }).click();
  await page.selectOption('[id="input-option217"]',{ value: "3"});
  
});