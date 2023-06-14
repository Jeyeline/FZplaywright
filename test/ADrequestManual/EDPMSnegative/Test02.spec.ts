import { test, expect, chromium } from '@playwright/test';
import Loginpom from "../POM/Loginpom"
import Tradepom from "../POM/Tradepom"
import requestneg from "../POM/requestneg"
import Requestpom from '../POM/Requestpom';
import attchmentVal from '../POM/attchmentVal'

const baseurl = 'http://bsit-ch-d005:9080/bank/portal#/login'
const loginUrl = 'http://bsit-ch-d005:9080/bank/portal#/dashboard/global'
const prodUrl = 'http://bsit-ch-d005:9080/bank/portal#/ext-route?type=FG_TRD_REG_RQ&subType=FG_EDPMS_REG'


test.describe('Check that the user receives the appropriate validation messages when entering invalid data.', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://bsit-ch-d005:9080/bank/portal#/login');

        const Login = new Loginpom(page)
        await Login.fillCorporateID("BLUESCOPE")
        await Login.fillUserName("CHECKER")
        await Login.fillPassword("password")
        await Login.clickLogin()
        await expect(page).toHaveURL(loginUrl)

        //SELECTING EDPMS PRODUCT:
        const Trade = new Tradepom(page)
        await Trade.clickTrade()
        await Trade.clickEdpms()
        await expect(page).toHaveURL(prodUrl)
        await Trade.clickInitiate()
        await Trade.clickReqtype()
        await Trade.clickAdtransfer()
        await Trade.clickAdd()
        await expect(page).toHaveURL(prodUrl)

    });


    test('verify that the user is notified when the shipping bill number is not provided with 7 digit value for the export type- Goods', async ({ page }) => {
        
        const req = new requestneg(page)
        await req.clickExportType()
        await req.ClickGoods()
        await req.ClickExportAgency()
        await req.ClickCustoms()
        await req.ClickShippingBill()
        await req.ClickShippingBillDate()
        await req.ClickShippingBillNo()
        await req.isFormNoDisabled()

    });

    test('Verify that the system shows the proper validation message when the shipping bill date is not in the current business date or past date', async ({ page }) => {
        const req = new requestneg(page)
        await req.ClickExportAgency()
        await req.clickStpi()
        await req.ClickShippingBillDate()
        await req.ClickPortCode()
        await req.ClickShippingDate()
    });

    test('Verify that the system shows the proper validation message when the Form number is not with 8 or 12 digit value for the export type- Software', async ({ page }) => {
        const req = new requestneg(page)
        await req.clickExportType()
        await req.clickSoftware()
        await req.ClickExportAgency()
        await req.clickStpi()
        await req.isShippingBillNoDisabled()
        await req.ClickFormNo()
        await req.ClickShippingBillDate()
        await req.clickFormNoValidation()
    });

    test('Verify that the system shows the proper validation message when the Port code is not with 6 alpha nuumeric value', async ({ page }) => {
        const req = new requestneg(page)
        await req.clickExportType()
        await req.ClickGoods()
        await req.ClickExportAgency()
        await req.clickSez()
        await req.fillPortNo()
        await req.ClickShippingBillDate()
        await req.ClickPort()
    });

    test('Verify that the system shows the proper validation message when the existing ad code exceeds 7 digits including the prefix 018 ', async ({ page }) => {
        const req = new requestneg(page)
        await req.clickExportType()
        await req.ClickGoods()
        await req.ClickExportAgency()
        await req.clickSez()
        await req.fillExistingAd()
        await req.ClickShippingBillDate()
        await req.ClickExistingCode()
    });

    test('Verify that the system shows the proper validation message when the new ad code is not provided with 4 digits', async ({ page }) => {
        const req = new requestneg(page)
        await req.clickExportType()
        await req.ClickGoods()
        await req.ClickExportAgency()
        await req.clickSez()
        await req.fillNewAd()
        await req.ClickPortCode()
    })
    


});

    





