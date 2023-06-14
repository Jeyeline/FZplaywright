import { Page, expect } from "@playwright/test";


export default class RequestPage {

    constructor(public page: Page) { }

    async clickExportType() {
        await this.page
            .frameLocator('iframe[title="widgetInIframe"]')
            .getByRole('combobox', { name: 'Export Type *' })
            .locator('div').nth(3)
            .click();

    }
    async ClickGoods() {
        await this.page
            .frameLocator('iframe[title="widgetInIframe"]')
            .getByRole('option', { name: 'Goods' })
            .locator('span').first()
            .click();
    }


    async ClickExportAgency() {
        await this.page
            .frameLocator('iframe[title="widgetInIframe"]')
            .getByRole('combobox', { name: 'Export Agency *' })
            .locator('div').nth(3)
            .click();
    }

    async ClickCustoms() {
        await this.page
            .frameLocator('iframe[title="widgetInIframe"]')
            .getByRole('option', { name: 'CUSTOMS' })
            .locator('span').first()
            .click();
    }


    //Shipping bill NO.
    async ClickShippingBill() {
        await this.page
            .frameLocator('iframe[title="widgetInIframe"]')
            .getByRole('dialog', { name: 'close dialog' })
            .getByText('Shipping Bill Number')
            .fill('q12');
    }

    async ClickFormNo() {
        await this.page.frameLocator('iframe[title="widgetInIframe"]')
            .getByRole('dialog', { name: 'close dialog' })
            .getByText('Form No')
            .fill('1234');
    }

   
     async clickFormNoValidation(){
     expect(this.page.frameLocator('iframe[title="widgetInIframe"]')
       .getByText('Form No should be length of 8 or 12 numeric characters'))
       .toHaveText(' Form No should be length of 8 or 12 numeric characters')
     }

    async ClickShippingBillDate() {
        await this.page
            .frameLocator('iframe[title="widgetInIframe"]')
            .getByLabel('Shipping Bill date  *')
            .click();
    }

  
    async ClickShippingBillNo() {
        expect(this.page.frameLocator('iframe[title="widgetInIframe"]')
            .getByText('Bill No. Should be length of 7'))
            .toHaveText(' Bill No. Should be length of 7')
    }

    async ClickPortCode() {
        await this.page
            .frameLocator('iframe[title="widgetInIframe"]')
            .getByRole('dialog', { name: 'close dialog' })
            .getByText('Port Code')
            .click();
    }


    async ClickShippingDate() {
        expect(this.page.frameLocator('iframe[title="widgetInIframe"]')
            .getByText('Shipping Bill date is required'))
            .toHaveText('Shipping Bill date is required');
    }

    async fillPortNo() {
        await this.page
            .frameLocator('iframe[title="widgetInIframe"]')
            .getByRole('dialog', { name: 'close dialog' })
            .getByText('Port Code')
            .fill("1");
    }

    
    async fillExistingAd() {
        await this.page
            .frameLocator('iframe[title="widgetInIframe"]')
            .getByRole('dialog', { name: 'close dialog' })
            .getByText('Existing AD Code')
            .fill("01889")
    }


    async ClickPort() {
        expect(this.page.frameLocator('iframe[title="widgetInIframe"]')
            .getByText(' Port Code Should be length of 6 alphanumeric'))
            .toHaveText(' Port Code Should be length of 6 alphanumeric');
    }


   
    async fillNewAd() {
        await this.page
            .frameLocator('iframe[title="widgetInIframe"]')
            .getByLabel('New AD Code *')
            .fill('23el');
    }

    async ClickExistingCode() {
        expect(this.page.frameLocator('iframe[title="widgetInIframe"]')
        .getByText('Existing AD Code Should be length of 7 numeric characters without prefix 018'))
        .toHaveText( 'Existing AD Code Should be length of 7 numeric characters without prefix 018');
    }


    async clickForValidation() {
        await this.page
            .frameLocator('iframe[title="widgetInIframe"]')
            .getByRole('dialog', { name: 'close dialog' })
            .getByText('Shipping Bill Number')
            .click();
    }

   
    async ClickNewCode() {
        expect(this.page.frameLocator('iframe[title="widgetInIframe"]')
            .getByText('Only numeric characters are allowed'))
            .toHaveText(' Only numeric characters are allowed');
    }

   
    async ClickAdd() {
        expect(this.page.frameLocator('iframe[title="widgetInIframe"]')
            .getByRole('button', { name: 'Add' }))
            .toBeDisabled()
    }


    isFormNoDisabled() {
        return this.page
            .frameLocator('iframe[title="widgetInIframe"]')
            .getByRole('dialog', { name: 'close dialog' })
            .getByText('Form No');
    }

    async clickSoftware() {
        await this.page
            .frameLocator('iframe[title="widgetInIframe"]')
            .getByRole('option', { name: 'Software' })
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

    isShippingBillNoDisabled() {
        return this.page
            .frameLocator('iframe[title="widgetInIframe"]')
            .getByRole('dialog', { name: 'close dialog' })
            .getByText('Shipping Bill Number')
    }












}
