import { test, expect, chromium } from '@playwright/test';
import Loginpom from "../POM/Loginpom"
import Tradepom from "../POM/Tradepom"
import requestneg from "../POM/requestneg"
import Requestpom from '../POM/Requestpom';
import attchmentVal from '../POM/attchmentVal'




const baseurl = 'http://bsit-ch-d005:9080/bank/portal#/login'
const loginUrl = 'http://bsit-ch-d005:9080/bank/portal#/dashboard/global'
const prodUrl = 'http://bsit-ch-d005:9080/bank/portal#/ext-route?type=FG_TRD_REG_RQ&subType=FG_EDPMS_REG'


test.describe('Check that the user is receiving the appropriate validation messages for the attachment.', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://bsit-ch-d005:9080/bank/portal#/login');

        const Login = new Loginpom(page)
        await Login.fillCorporateID("BLUESCOPE")
        await Login.fillUserName("CHECKER")
        await Login.fillPassword("password")
        await Login.clickLogin()
        await expect(page).toHaveURL(loginUrl)

       
        const Trade = new Tradepom(page)
        await Trade.clickTrade()
        await Trade.clickEdpms()
        await expect(page).toHaveURL(prodUrl)
        await Trade.clickInitiate()
        await Trade.clickReqtype()
        await Trade.clickAdtransfer()
        const attach = new attchmentVal(page)
        await attach.attachmentTab()

    });

    test('Verify that the file name should not exceed the maximum limit of 35 characters.', async ({ page }) => {
        const file = new attchmentVal(page)
        await file
        .attachement('tests/ADrequestManual/Upload Files/This is AD request This is AD request This is AD request This is AD request.jpeg')
        await expect(page.frameLocator('iframe[title="widgetInIframe"]')
        .getByText('Sorry, your file exceeds the maximum file length limit. Please choose a file tha'))
        .toHaveText('Sorry, your file exceeds the maximum file length limit. Please choose a file that is smaller than 35 characters and try again.');

    });

    test('Verify that the file name should not have special characters.', async ({ page }) => {
        const file = new attchmentVal(page)
        await file.attachement('tests/ADrequestManual/Upload Files/123%Special character.jpeg');
        await expect(page.frameLocator('iframe[title="widgetInIframe"]').
        getByText('Special charaters not allowed.')).toHaveText('Special charaters not allowed.');

    });

    test('Verify that the error pop up should be displayed when the user exceeds the  max limit of 5 attachment', async ({ page }) => {
        const file = new attchmentVal(page)
        await file.clickMultipleFiles()
        await expect(page.frameLocator('iframe[title="widgetInIframe"]')
        .getByText('Maximum No. Of files allowed to attach exceeded.'))
        .toHaveText('Maximum No. Of files allowed to attach exceeded.'); 

    });

    
    test('Verify that the validation message should be displayedif each file  exceeds the size of 3 mb.', async ({ page }) => {
        const file = new attchmentVal(page)
        await file.attachement('tests/ADrequestManual/Upload Files/6mb.docx')
        await expect(page.frameLocator('iframe[title="widgetInIframe"]')
        .getByText('Maximum Limit have been expired'))
        .toHaveText('Maximum Limit have been expired');
    });






});