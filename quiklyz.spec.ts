import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://www.tutorialsninja.com/');
    await page.click("//html//body//table//tbody/tr[3]//td[2]//a");
    await page.getByRole('link', { name : 'Components'}).first().click();
    await page.getByRole('link', { name : 'Monitors (2)'}).click();
    await page.getByRole('link', { name : 'Apple Cinema 30'}).first().click();
    await page.getByLabel('Large (+$36.00)').click();
    await page.getByLabel('Checkbox 3 (+$36.00)').click();
    await page.fill("//*[@id='input-option208']", "exam");
    await page.selectOption('[id="input-option217"]',{ value: "3"});
    await page.fill("//*[@id='input-option209']", "mobile");
    //await page.getByRole('button', { name: ' Upload File' }).click();
 // await page.setInputFiles("//*[@id='button-upload222']", "tests/upload file/Test Management Notes.pdf");
const [uploadFiles] = await Promise.all([
    page.waitForEvent('filechooser'),
    page.click("//*[@id='button-upload222']")
])
uploadFiles.setFiles("tests/upload file/Test Management Notes.pdf");  
await page.click("//*[@id='button-cart']");
});