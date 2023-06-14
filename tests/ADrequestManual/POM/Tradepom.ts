import { Page } from "@playwright/test";


export default class TradePage {

    constructor(public page: Page) { }

    async clickTrade() {
        await this.page
            .getByRole('list')
            .locator('a').filter({ hasText: 'Trade/ Forex' })
            .click();
    }

    async clickEdpms() {
        await this.page
            .getByRole('list')
            .locator('a')
            .filter({ hasText: 'Exports Regularization' })
            .click();
    }

    async clickInitiate() {
        await this.page
            .frameLocator('iframe[title="widgetInIframe"]')
            .locator('fg-single-action')
            .getByRole('button', { name: 'Edit Record' })
            .click();
    }

    async clickReqtype() {
        await this.page
            .frameLocator('iframe[title="widgetInIframe"]')
            .getByRole('combobox', { name: 'Request type' })
            .locator('span')
            .click();
    }

    async clickAdtransfer() {
        await this.page
            .frameLocator('iframe[title="widgetInIframe"]')
            .getByRole('option', { name: 'AD Transfer Request' })
            .click();
    }

    async clickAdd() {
        await this.page
            .frameLocator('iframe[title="widgetInIframe"]')
            .getByRole('button', { name: 'Add' })
            .click();
    }

    async clickNext() {
        await this.page
            .frameLocator('iframe[title="widgetInIframe"]')
            .getByRole('button', { name: 'Next' })
            .click();
    }

    async clickOk(){
          await this.page
        .frameLocator('iframe[title="widgetInIframe"]')
        .getByRole('button', { name: 'OK' })
        .click();
    }









}