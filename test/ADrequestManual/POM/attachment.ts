import { Page } from "@playwright/test";



export default class AttachmentPage {

    constructor(public page: Page) { }

    async clickFileChooser() {

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
            // 'tests/ADrequestManual/Upload Files/file.rtf',
            'tests/ADrequestManual/Upload Files/sam.doc',
            'tests/ADrequestManual/Upload Files/sample.jpg',
            'tests/ADrequestManual/Upload Files/sample.png',
            'tests/ADrequestManual/Upload Files/test.pdf',
            'tests/ADrequestManual/Upload Files/tst.gif',
        ]);
    }

    async clickDownload(filename: string) {
        const downloadPromise = this.page.waitForEvent('download');
        await this.page.frameLocator('iframe[title="widgetInIframe"]').getByRole('button', { name: 'download' }).click();
        const download = await downloadPromise;
        console.log(await download.path());
        const fileName = download.suggestedFilename()
        await download.saveAs('C:/Finezoom' + fileName);
        this.page.on('download', download => download.path().then(console.log));
    }

    async clicknext() {
        await this.page
            .frameLocator('iframe[title="widgetInIframe"]')
            .getByRole('button', { name: 'Next' })
            .click();
    }

    
}