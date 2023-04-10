import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
await page.goto("https://www.flipkart.com/");
await page.click("body > div._2Sn47c > div > div > button");
await page.getByAltText("Electronics").hover();
await page.getByRole('link', {name: 'Bluetooth Headphones'}).click();
const [newWindow] = await Promise.all([
    page.waitForEvent("popup"),
    page.click("//*[@id='container']/div/div[3]/div/div[2]/div[4]/div/div[2]/div/a[2]")
])
await newWindow.getByRole('button', {name:'Read More'}).click();
await newWindow.fill("#pincodeInputId", "416012");
await newWindow.click("//*[@id='container']/div/div[3]/div[1]/div[2]/div[6]/div/div/div[1]/div[2]/div/div[2]/div[1]/span");
await newWindow.getByRole("button", { name : "Add to cart"}).click();
await newWindow.click("//*[@id='container']/div/div[2]/div/div/div[1]/div/div[3]/div/div[3]/div[1]/div/button[2]");
await page.getByPlaceholder("Search for products, brands and more").fill("men running shoe")
await page.click("//*[@id='container']/div/div[1]/div[1]/div[2]/div[2]/form/div/button")
const [Window2] = await Promise.all([
    page.waitForEvent("popup"),
    page.getByRole('link', {name:'Exclusive Range of Stylish Comfortable Sports Sneakers ...'}).click()
])
 await Window2.click("//*[@id='container']/div/div[3]/div[1]/div[1]/div[2]/div/ul/li[1]/button")
})