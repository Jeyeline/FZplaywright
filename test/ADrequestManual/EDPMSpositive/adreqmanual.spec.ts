import { test, expect, chromium } from '@playwright/test';
import Loginpom from "../POM/Loginpom"
import Tradepom from "../POM/Tradepom"
import Requestpom from "../POM/Requestpom"
import attachment from "../POM/attachment"
import PreviewPage from '../POM/preview'




const baseurl = 'http://bsit-ch-d005:9080/bank/portal#/login'
const loginUrl = 'http://bsit-ch-d005:9080/bank/portal#/dashboard/global'
const prodUrl = 'http://bsit-ch-d005:9080/bank/portal#/ext-route?type=FG_TRD_REG_RQ&subType=FG_EDPMS_REG'

test.describe('Verifying that the user could login to the portal and initiate the AD request successfully', () => {
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
    await Trade.clickAdd()
    await expect(page).toHaveURL(prodUrl)

  });



  test.afterEach(async ({ page }) => {
  
    const attach = new attachment(page)
    await attach.clickFileChooser()
    await attach.clicknext()

    const preview = new PreviewPage(page)
    await preview.clickSubmit()
    await preview.clickYes()
    await preview.Success()
  

  });


  test('Verifying that the AD request is created for the export type - Goods and export agency -CUSTOMS', async ({ page }) => {
   
    const Request1 = new Requestpom(page)
    await Request1.clickExportType()
    await Request1.clickGoods()
    await Request1.clickExportAgency()
    await Request1.clickCustoms()
    await Request1.fillShippingBill("3456789")
    expect(Request1.isFormNoDisabled()).toBeDisabled()
    await Request1.openCalendar()
    await Request1.ShippingBillDate()
    await Request1.fillPortCode("elc123")
    await Request1.fillExistingAd("1234556")
    await Request1.fillNewAd("2132")
    await Request1.clickAdd()
    await Request1.clickNext()
  });


  test('Verify that the AD request is created for the export type - software and export agency- STPI', async ({ page }) => {

   
    const Request2 = new Requestpom(page)
    await Request2.clickExportType()
    await Request2.clickSoftware()
    await Request2.clickExportAgency()
    await Request2.clickStpi()
    expect(Request2.isShippingBillNoDisabled()).toBeDisabled()
    await Request2.fillFormNo("12345678")
    await Request2.openCalendar()
    await Request2.ShippingBillDate()
    await Request2.fillPortCode("ec1234")
    await Request2.fillExistingAd("1234556")
    await Request2.fillNewAd("2132")
    await Request2.clickAdd()
    await Request2.clickNext()

  });


  test('Verify that the AD request is created for the export type - Goods and export agency- SEZ ', async ({ page }) => {

   
    const Request3 = new Requestpom(page)
    await Request3.clickExportType()
    await Request3.clickGoods()
    await Request3.clickExportAgency()
    await Request3.clickSez()
    await Request3.fillShippingBill("3456789")
    expect(Request3.isFormNoDisabled()).toBeDisabled()
    await Request3.openCalendar()
    await Request3.ShippingBillDate()
    await Request3.fillPortCode("ir0123")
    await Request3.fillExistingAd("1234556")
    await Request3.fillNewAd("2132")
    await Request3.clickAdd()
    await Request3.clickNext()


  });





});

