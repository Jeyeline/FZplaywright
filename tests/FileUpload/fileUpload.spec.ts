import { test, expect, } from '@playwright/test';
import LoginPom from "./Pages/LoginPom"
import TradeList from "./Pages/TradeList"
import InitiateRequest from "./Pages/InitiateRequest"




test.describe('Verify that the user may initiate an ad transfer request using the file upload option.', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('http://bsit-ch-d005:9080/bank/portal#/login');

        //Login:
        const login = new LoginPom(page);
        await login.enterCorporateId("bluescope");
        await login.enterUserName("maker1");
        await login.enterPassword("Password");
        await login.clickLogin();

        //Product selection
        const product = new TradeList(page);
        await product.clickTradeList();
        await product.clickExportRegularization();

        //SELECTING INITIATE NEW REQUEST:
        const initiate = new InitiateRequest(page);
        await initiate.clickInitiateNewRequest();
        await initiate.clickRequestType();
        await initiate.clickAdReq();

    });


    test('Verify that the user could download the file upload template', async ({ page }) => {
        const download = new InitiateRequest(page)
        await download.clickDownloadTemplate('Template.xlsx')
    });


    test('verify that the user should not be able to upload the format of PDF in file upload.', async ({ page }) => {
        const upload = new InitiateRequest(page)
        await upload.clickUploadADTransfer('tests/FileUpload/Upload Files/EDPMS.pdf')
        await upload.pdfValidation()
        await upload.timeOut()

    });

    test('Verify that the user is notified with the proper validation for the duplicate record.', async ({ page }) => {
        const upload = new InitiateRequest(page)
        await upload.clickUploadADTransfer('tests/FileUpload/Upload Files/Duplication.xlsx')
        await upload.clickSubmit()
        await upload.duplicateValidation()
        await upload.timeOut()
    });


    test('Verify that the system shows the proper validation message when the Port code is not with 6 alpha nuumeric value ', async ({ page }) => {
        const upload = new InitiateRequest(page)
        await upload.clickUploadADTransfer('tests/FileUpload/Upload Files/Port Code.xlsx')
        await upload.clickSubmit()
        await upload.portcodeValidation()

    });

    test('Verify that the user is notified with the proper validation message when the export type field is left blank', async ({ page }) => {
        const upload = new InitiateRequest(page)
        await upload.clickUploadADTransfer('tests/FileUpload/Upload Files/Export type.xlsx')
        await upload.clickSubmit()
        await upload.exportTypeValidation()
    });

    test('Verify that the user is notified with the proper validation message when the export agency is left blank.', async ({ page }) => {
        const upload = new InitiateRequest(page)
        await upload.clickUploadADTransfer('tests/FileUpload/Upload Files/Export Agency.xlsx')
        await upload.clickSubmit()
        await upload.expportAgencyValidation()

    });



    test('verify that the user is notified when the shipping bill number is not provided with 7 digit value for the export type- Goods ', async ({ page }) => {
        const upload = new InitiateRequest(page)
        await upload.clickUploadADTransfer('tests/FileUpload/Upload Files/Shipping bill number.xlsx')
        await upload.clickSubmit()
        await upload.shippingBillNumberValidation()

    });

    test('Verify that the system shows the proper validation message when the shipping bill date is not in the current business date or past date', async ({ page }) => {
        const upload = new InitiateRequest(page)
        await upload.clickUploadADTransfer('tests/FileUpload/Upload Files/Shipping bill date.xlsx')
        await upload.clickSubmit()
        await upload.shippingBillDateFormat()
        await upload.clickClose()
        await upload.clickUploadADTransfer('tests/FileUpload/Upload Files/Shipping bill future date.xlsx')
        await upload.clickSubmit()
        await upload.shippingBillDatePast()

    });

    test('Verify that the system shows the proper validation message when the Form number is not with 8 or 12 digit value for the export type- Software', async ({ page }) => {
        const upload = new InitiateRequest(page)
        await upload.clickUploadADTransfer('tests/FileUpload/Upload Files/Form number.xlsx')
        await upload.clickSubmit()
        await upload.formNumberValidation()

    });

    test('Verify that the system shows the proper validation message when the existing ad code exceeds 7 digits including the prefix 018', async ({ page }) => {
        const upload = new InitiateRequest(page)
        await upload.clickUploadADTransfer('tests/FileUpload/Upload Files/Exisiting AD code.xlsx')
        await upload.clickSubmit()
        await upload.existingAdcodeValidation()
    });


    test('Verify that the system shows the proper validation message when the new ad code is not provided with 4 digits', async ({ page }) => {
        const upload = new InitiateRequest(page)
        await upload.clickUploadADTransfer('tests/FileUpload/Upload Files/New AD code.xlsx')
        await upload.clickSubmit()
        await upload.newAdCodeValidation()

    });

    test('Verify that the user could download and upload the ad transfer template with the valid records.', async ({ page }) => {
        const upload = new InitiateRequest(page)
        await upload.clickUploadADTransfer('tests/FileUpload/Upload Files/Positive flow.xlsx')
        await upload.clickSubmit()
        await upload.clickClose()
        await upload.clickNext()
        await upload.clickBrowse()
        await upload.clickUploadAttachment('tests/FileUpload/Upload Files/adupload.xlsx')
        await upload.clickTitle()
        await upload.fillTitle('Test')
        await upload.clickUpload()
        await upload.clickNext()
        await upload.clickSUbmitButton()
        await upload.confirmationMessage()


    });


});






  