import { test, expect,chromium } from '@playwright/test';
test.describe.parallel('login', ()=> {
  test('Login', async ({page}) => {
    //const browser = await chromium.launch()
    //const context = await browser.newContext();
   // const page = await context.newPage();
    //Login
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByPlaceholder("Username").type("Admin")
    await page.locator("input[name='password']").type("admin123")
    await page.locator("//button[@type='submit']").click()
    await page.waitForTimeout(5000)
    await expect(page).toHaveURL(/dashboard/);  

    // Logout 
    await page.getByAltText("profile picture").first().click()
    await page.getByText("Logout").click()
    await page.waitForTimeout(5000)
    await expect(page).toHaveURL(/login/)

  });

});
//npx playwright test ./tests/loginnew.spec.ts