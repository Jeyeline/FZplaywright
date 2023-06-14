import { Page } from "@playwright/test";


export default class TradeList {

    constructor(public page: Page) {

    }
    async clickTradeList() {

        await this.page.getByRole('list').locator('a').getByText('Trade/ Forex').click();
    }

    async clickExportRegularization() {

        await this.page.getByRole('list').locator('a').getByText('Exports Regularization').click();
    }

}