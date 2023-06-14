import { Page } from "@playwright/test";




export default class NewRequest {

    constructor(public page: Page) {

    }
    async clickBrowse() {

        await this.page.frameLocator('iframe[title="widgetInIframe"]').getByRole('button', { name: 'Browse' }).click();
    }
}



