import { Page, expect } from "@playwright/test";



export default class PreviewPage {

    constructor(public page: Page) { }

    async clickSubmit() {
        await this.page
            .frameLocator('iframe[title="widgetInIframe"]')
            .getByRole('button', { name: 'Submit' })
            .click();
    }


    async clickYes() {
        await this.page
            .frameLocator('iframe[title="widgetInIframe"]')
            .getByText('Yes')
            .click();
    }

    async Success() {
        await expect(this.page.frameLocator('iframe[title="widgetInIframe"]')
            .getByText('Success', { exact: true }))
            .toHaveText('Success')
        await this.page.waitForTimeout(3000)
    }
    async transactionsuccessfull() {
        await expect(this.page.frameLocator('iframe[title="widgetInIframe"]')
            .getByText('Your transaction is submitted successfully.'))
            .toHaveText('Your transaction is submitted successfully.')

    }



}









