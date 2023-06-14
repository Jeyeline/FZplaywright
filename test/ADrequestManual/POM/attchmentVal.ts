import { Page } from "@playwright/test";



export default class AttachmentPage {

    constructor(public page: Page) { }

    async attachement(Filename:string) {

        const [uploadFiles] = await Promise.all([
            this.page.waitForEvent("filechooser"),
            this.page.frameLocator('iframe[title="widgetInIframe"]').getByRole('textbox').click(),
        ]);

        uploadFiles.setFiles(Filename)
    }
    async attachmentTab(){
    await this.page.frameLocator('iframe[title="widgetInIframe"]')
    .getByRole('tab', { name: 'Attachments' })
    .locator('div').nth(1).click();
    }
    async clickMultipleFiles() {

        const [uploadFiles] = await Promise.all([
            this.page.waitForEvent("filechooser"),
            this.page.frameLocator('iframe[title="widgetInIframe"]').getByRole('textbox').click(),
        ]);

        uploadFiles.setFiles([
             // 'tests/ADrequestManual/Upload Files/123.jpeg',
            // 'tests/ADrequestManual/Upload Files/Demo.csv',
            // 'tests/ADrequestManual/Upload Files/dem.xls',
            // 'tests/ADrequestManual/Upload Files/demo.xlsx',
            // 'tests/ADrequestManual/Upload Files/Docs.docx',
            'tests/ADrequestManual/Upload Files/file.rtf',
            'tests/ADrequestManual/Upload Files/sam.doc',
            'tests/ADrequestManual/Upload Files/sample.jpg',
            'tests/ADrequestManual/Upload Files/sample.png',
            'tests/ADrequestManual/Upload Files/test.pdf',
            'tests/ADrequestManual/Upload Files/tst.gif',
        ]);
    }


}
