import {Given, When, Then} from "@cucumber/cucumber"
import {chromium, Page, Browser, expect} from "@playwright/test";

let browser:Browser;
let page: Page;

Given("User navigates to the application", async function (){
 browser = await chromium.launch({ headless: false});
page = await browser.newPage();
await page.goto("https://bookcart.azurewebsites.net/https://bookcart.azurewebsites.net/")
})

Given("User click on the login link", async function (){
await page.click("body > app-root > app-nav-bar > mat-toolbar > mat-toolbar-row > div:nth-child(3) > button.mat-focus-indicator.mat-button.mat-button-base.ng-star-inserted")
});

Given("User enter the username as {string}", async function (username){
await page.locator("//*[@id='mat-input-0']").fill(username)
});

Given("User enter the password as {string}", async function (password){
    await page.locator("//*[@id='mat-input-1']").fill(password)

});

When("User click on the login button", async function (){
await page.click("body > app-root > div > app-login > div > div.docs-example-viewer-body > div > mat-card > mat-card-content > form > mat-card-actions > button")
});

Then('Login should be success', async function (){
const text = await page.textContent("body > app-root > app-nav-bar > mat-toolbar > mat-toolbar-row > div:nth-child(3) > button.mat-focus-indicator.mat-menu-trigger.mat-button.mat-button-base.ng-star-inserted > span.mat-button-wrapper")
console.log("Username: "+ text);
await browser.close()
});

When('Login should fail', async function (){
const failureMessage = await page.getByText("Username or Password is incorrect.")
await expect(failureMessage).toBeVisible()
await browser.close()
})