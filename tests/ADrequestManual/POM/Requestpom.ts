import { Page } from "@playwright/test";


export default class RequestPage {

    constructor(public page: Page) { }

    async clickExportType() {
        await this.page
            .frameLocator('iframe[title="widgetInIframe"]')
            .getByRole('combobox', { name: 'Export Type *' })
            .locator('div').nth(3)
            .click();
    }

    async clickGoods() {
        await this.page
            .frameLocator('iframe[title="widgetInIframe"]')
            .getByRole('option', { name: 'Goods' })
            .locator('span').first()
            .click()
    }

    async clickSoftware() {
        await this.page
            .frameLocator('iframe[title="widgetInIframe"]')
            .getByRole('option', { name: 'Software' })
            .locator('span').first()
            .click();
    }

    async clickExportAgency() {
        await this.page
            .frameLocator('iframe[title="widgetInIframe"]')
            .getByRole('combobox', { name: 'Export Agency *' })
            .locator('div').nth(3)
            .click();
    }

    async clickCustoms() {
        await this.page
            .frameLocator('iframe[title="widgetInIframe"]')
            .getByRole('option', { name: 'CUSTOMS' })
            .locator('span').first()
            .click();

    }


    async clickStpi() {
        await this.page
            .frameLocator('iframe[title="widgetInIframe"]')
            .getByRole('option', { name: 'STPI' })
            .locator('span').first()
            .click();

    }

    async clickSez() {
        await this.page
            .frameLocator('iframe[title="widgetInIframe"]')
            .getByRole('option', { name: 'SEZ' }).locator('span').first()
            .click();
    }

    async fillShippingBill(shippingbill: string) {
        await this.page
            .frameLocator('iframe[title="widgetInIframe"]')
            .getByRole('dialog', { name: 'close dialog' })
            .getByText('Shipping Bill Number')
            .fill(shippingbill);
    }

    isFormNoDisabled() {
        return this.page
            .frameLocator('iframe[title="widgetInIframe"]')
            .getByRole('dialog', { name: 'close dialog' })
            .getByText('Form No');
    }


    async fillFormNo(formno: string) {
        await this.page
            .frameLocator('iframe[title="widgetInIframe"]')
            .getByRole('dialog', { name: 'close dialog' })
            .getByText('Form No')
            .fill(formno);
    }

    isShippingBillNoDisabled() {
        return this.page
            .frameLocator('iframe[title="widgetInIframe"]')
            .getByRole('dialog', { name: 'close dialog' })
            .getByText('Shipping Bill Number')
    }

    async openCalendar() {

        await this.page
            .frameLocator('iframe[title="widgetInIframe"]')
            .getByRole('button', { name: 'Open calendar' })
            .click();
    }

    async ShippingBillDate() {

        await this.page
            .frameLocator('iframe[title="widgetInIframe"]')
            .getByRole('button', { name: '2 May 2023', exact: true })
            .click();
    }


    async fillPortCode(portcode: string) {
        await this.page
            .frameLocator('iframe[title="widgetInIframe"]')
            .getByRole('dialog', { name: 'close dialog' })
            .getByText('Port Code')
            .fill(portcode);
    }

    async fillExistingAd(adcode: string) {
        await this.page
            .frameLocator('iframe[title="widgetInIframe"]')
            .getByRole('dialog', { name: 'close dialog' })
            .getByText('Existing AD Code')
            .fill(adcode);
    }

    async fillNewAd(newad: string) {
        await this.page
            .frameLocator('iframe[title="widgetInIframe"]')
            .getByLabel('New AD Code *')
            .fill(newad);
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

}

