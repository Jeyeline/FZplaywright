import { Page } from "@playwright/test";


export default class loginPage {

    constructor(public page: Page) { }

    async fillCorporateID(corporateId: string) {
        await this.page.locator('#corporateid').fill(corporateId)
    }

    async fillUserName(username: string) {
        await this.page.locator('#username').fill(username)
    }

    async fillPassword(password: string) {
        await this.page.locator('#password').fill(password)

    }

    async clickLogin() {
        await this.page.getByText('Login').click()
    }


}