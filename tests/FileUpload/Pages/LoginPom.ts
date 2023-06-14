import { Page } from "@playwright/test";



export default class LoginPage {

    constructor(public page: Page) {

    }
    async enterCorporateId(CorporateID: string) {

        await this.page.locator('#corporateid').fill(CorporateID);
    }
    async enterUserName(UserName: string) {

        await this.page.locator('#username').fill(UserName);
    }
    async enterPassword(Password: string) {

        await this.page.locator('#password').fill(Password);
    }
    async clickLogin() {

        await this.page.getByText('Login').click();
    }

}