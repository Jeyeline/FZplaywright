import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto("https://www.quiklyz.com/")
 await page.click("//*[@id='mat-dialog-0']/fg-modal-dialog/form/div/div[2]/div/fg-modal-body/div/div[2]/div/fg-custom-container/div/div/div/div/fg-client-context-switcher/div/div[2]/div/div[1]/div[1]/div[2]")
await page.click("//*[@id='toolbar-menu']/span/span/span[2]/span/button/span[1]")
 

await page.click("//*[@id='mat-menu-panel-2']/div/span[2]/span/a")
await page.click("//*[@id='main-content-wrapper']/fg-client-main-nav/mat-sidenav-container/mat-sidenav-content/div[2]/fg-form/div[2]/div/div/form/div/div[1]/fieldset/div/div[2]/div/fg-custom-container/div/div/div[9]/div/div[1]/div[2]/div/div[2]/div/fg-single-action/fg-action-builder-actions/button")
await page.getByRole('link', {name : 'Mahindra Thar'}).click();
await page.click("//*[@id='dwde913b22-1dae-4ad9-b26f-37e196114617']/a");
await page.click("//*[@id='dwde913b22-1dae-4ad9-b26f-37e196114617']/div[2]/form/div[2]/ul/li[3]/div/div[1]")
await page.click("//*[@id='main-content-wrapper']/fg-client-main-nav/mat-sidenav-container/mat-sidenav-content/div[2]/fg-form/div[2]/div/div/form/div/div[1]/fieldset/div/div[2]/div/fg-custom-container/div/div/div[1]/div/div[1]/div[2]/div/div/div/fg-custom-container/div/div/div/div/fg-card/div/mat-card/mat-card-content/div/div[8]/div/div[1]/div[1]/div/div[1]/div/fg-custom-container/div/div/div/div/fg-single-action/fg-action-builder-actions/button")
await page.fill("//*[@id='mat-input-32']","Prafull")
await page.fill("//*[@id='mat-input-33']", "Patil")
await page.fill("//*[@id='mat-form-field-label-91']/mat-label", "p1212@gmail.com")
await page.fill("//*[@id='mat-form-field-label-93']/mat-label", "1234567890")
await page.click("//*[@id='mat-checkbox-1']/label/span[1]")
await page.click("//*[@id='mat-tab-content-2-0']/div/div[2]/div/div/fg-custom-container/div/div/div[1]/div/div[1]/div[2]/div/div[3]/div/fg-single-action/fg-action-builder-actions/button")
})