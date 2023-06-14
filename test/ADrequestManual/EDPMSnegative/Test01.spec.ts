import { test, expect, chromium } from '@playwright/test';
import Loginpom from "../POM/Loginpom"
import Tradepom from '../POM/Tradepom';


const baseurl = 'http://bsit-ch-d005:9080/bank/portal#/login'
const loginUrl = 'http://bsit-ch-d005:9080/bank/portal#/dashboard/global'
const prodUrl = 'http://bsit-ch-d005:9080/bank/portal#/ext-route?type=FG_TRD_REG_RQ&subType=FG_EDPMS_REG'


test.describe('Check that the user receives the appropriate validation messages when entering invalid data.', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://bsit-ch-d005:9080/bank/portal#/login');

    });


    test('Verify that the proper validation message is given for the invalid login credentials', async ({ page }) => {

        const Login = new Loginpom(page)
        await Login.fillCorporateID("FINEZOOM")
        await Login.fillUserName("BLUESCOPE")
        await Login.fillPassword("pass")
        await Login.clickLogin()
        await expect(page.getByText('Sorry, the combination of Company id, User id and Password is incorrect!'))
            .toHaveText('Sorry, the combination of Company id, User id and Password is incorrect!')

    });

    test('Verify that the user could login to the portal with valid login credentials', async ({ page }) => {

        const Login = new Loginpom(page)
        await Login.fillCorporateID("BLUESCOPE")
        await Login.fillUserName("CHECKER")
        await Login.fillPassword("password")
        await Login.clickLogin()
        await expect(page).toHaveURL(loginUrl)
    });


    test('Verify that the user notifies with the proper validation when the request type is not selected', async ({ page }) => {

        //SELECTING EDPMS PRODUCT:
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
        await Trade.clickNext()
        await expect(page.frameLocator('iframe[title="widgetInIframe"]')
            .getByRole('cell', { name: 'Request Type is not selected.' }))
            .toHaveText('Request Type is not selected.')
        await Trade.clickOk()

    });

    test('Verify that the user is notified when they directly go to attachment section without completing the general tab', async ({ page }) => {


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
        await Trade.clickNext()
        await expect(page.frameLocator('iframe[title="widgetInIframe"]')
            .getByRole('cell', { name: 'AD Transfer Request is empty.' }))
            .toHaveText('AD Transfer Request is empty.')
        await Trade.clickOk()

    });







});












