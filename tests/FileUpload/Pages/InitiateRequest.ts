import { Page, expect } from "@playwright/test";



export default class NewRequest {

    constructor(public page: Page) {

    }
    async clickInitiateNewRequest() {

        await this.page.frameLocator('iframe[title="widgetInIframe"]')
            .getByRole('button', { name: 'Edit Record' })
            .click();
    }

    async clickRequestType() {

        await this.page.frameLocator('iframe[title="widgetInIframe"]')
            .getByRole('combobox', { name: 'Request type' }).locator('span')
            .click();
    }

    async clickAdReq() {

        await this.page.frameLocator('iframe[title="widgetInIframe"]')
            .getByRole('option', { name: 'AD Transfer Request' })
            .click();

    }

    async clickDownloadTemplate(filename: string) {

        const downloadPromise = this.page.waitForEvent('download');
        await this.page.frameLocator('iframe[title="widgetInIframe"]')
            .getByRole('link', { name: 'Download Template' })
            .click();

        const download = await downloadPromise;
        console.log(await download.path());
        const fileName = download.suggestedFilename()
        await download.saveAs('C:/Fileupload/tests/Kotak-EDPMS/Upload Files' + fileName);
        this.page.on('download', download => download.path().then(console.log));

    }

    async clickUploadADTransfer(FileName: string) {

        await this.page.frameLocator('iframe[title="widgetInIframe"]').getByText('Upload AD Transfer ').click();
        const [uploadFiles] = await Promise.all([
            this.page.waitForEvent("filechooser"),
            this.page.frameLocator('iframe[title="widgetInIframe"]')
                .getByRole('dialog', { name: 'AD Transfer Request' })
                .click(),
        ]);

        uploadFiles.setFiles(FileName);


    }

    async pdfValidation() {

        await expect(this.page.frameLocator('iframe[title="widgetInIframe"]')
            .locator('#swal2-html-container'))
            .toHaveText('Invalid Format');
    }

    async clickSubmit() {
        await this.page
            .frameLocator('iframe[title="widgetInIframe"]')
            .getByRole('button', { name: 'Edit Record' })
            .click();
    }

    async duplicateValidation() {
        await expect(this.page.frameLocator('iframe[title="widgetInIframe"]')
            .getByText('Duplicate Bill/Form number'), 'Duplicate shipping bill number')
            .toHaveText(/Duplicate Bill/);
    }

    async timeOut() {
        await this.page.waitForTimeout(4000);
    }

    async portcodeValidation() {
        await expect(this.page.frameLocator('iframe[title="widgetInIframe"]')
            .getByText('Port Code is not valid at row 2 - It Should be length of 6 alphanumeric characters.'), 'Port code is invalid')
            .toHaveText(/Port Code is not valid/);
    }

    async exportTypeValidation() {
        await expect(this.page.frameLocator('iframe[title="widgetInIframe"]')
            .getByText('Export Type is not valid'), 'Export type is to be selected')
            .toHaveText(/Export Type is not valid/);

    }
    async expportAgencyValidation() {
        await expect(this.page.frameLocator('iframe[title="widgetInIframe"]')
            .getByText('Export Agency is not valid'), 'Export Agency is to be selected')
            .toHaveText(/Export Agency is not valid/);

    }

    async shippingBillNumberValidation() {
        await expect(this.page.frameLocator('iframe[title="widgetInIframe"]')
            .getByText('Shipping Bill No is not valid'), 'Shipping bill number should be length of 7 digits')
            .toHaveText(/Shipping Bill No is not valid/);

    }

    async shippingBillDateFormat() {
        await expect(this.page.frameLocator('iframe[title="widgetInIframe"]')
            .getByText('Date format'), 'Incorrect shipping bill date format')
            .toHaveText(/Date format/);

    }

    async clickClose() {
        await this.page.frameLocator('iframe[title="widgetInIframe"]')
            .getByRole('button', { name: 'close' })
            .click();

    }

    async shippingBillDatePast() {

        await expect(this.page.frameLocator('iframe[title="widgetInIframe"]')
            .getByText('Date should be past'), 'Past date is not allowed')
            .toHaveText(/Date should be past/);

    }

    async formNumberValidation() {
        await expect(this.page.frameLocator('iframe[title="widgetInIframe"]')
            .getByText('Form No is not valid'), 'Form number should be 8 or 12 digit')
            .toHaveText(/Form No is not valid/);

    }

    async existingAdcodeValidation() {
        await expect(this.page.frameLocator('iframe[title="widgetInIframe"]')
            .getByText('Existing AD Code is not valid'), 'Invalid Existing AD code')
            .toHaveText(/Existing AD Code is not valid/);

    }

    async newAdCodeValidation() {
        await expect(this.page.frameLocator('iframe[title="widgetInIframe"]')
            .getByText('New AD Code is not valid'), 'Invalid new AD code')
            .toHaveText(/New AD Code is not valid/);

    }

    async clickNext() {
        await this.page
            .frameLocator('iframe[title="widgetInIframe"]')
            .getByRole('button', { name: 'Next' })
            .click();
    }

    async clickBrowse() {
        await this.page
            .frameLocator('iframe[title="widgetInIframe"]')
            .getByRole('button', { name: 'Browse' })
            .click();

    }
    async clickUploadAttachment(FileName: string) {
        const [uploadFiles1] = await Promise.all([
            this.page.waitForEvent("filechooser"),
            this.page.frameLocator('iframe[title="widgetInIframe"]')
                .getByRole('button', { name: 'Choose' })
                .click(),
        ]);
        uploadFiles1.setFiles(FileName);
    }

    async clickTitle() {
        await this.page
            .frameLocator('iframe[title="widgetInIframe"]')
            .getByLabel('Title *')
            .click();

    }

    async fillTitle(fileName: string) {
        await this.page
            .frameLocator('iframe[title="widgetInIframe"]')
            .getByLabel('Title *')
            .fill(fileName);

    }

    async clickUpload() {
        await this.page
            .frameLocator('iframe[title="widgetInIframe"]')
            .getByRole('button', { name: ' Upload' })
            .click();

    }

    async confirmationMessage() {
        await expect(this.page.frameLocator('iframe[title="widgetInIframe"]')
            .getByRole('heading', { name: 'Confirmation' }))
            .toHaveText('Confirmation')

    }

    async clickYes() {
        await this.page.frameLocator('iframe[title="widgetInIframe"]')
            .getByText('Yes')
            .click();

    }

    async clickSUbmitButton() {
        await this.page.frameLocator('iframe[title="widgetInIframe"]')
            .getByRole('button', { name: 'Submit' })
            .click();
    }





}