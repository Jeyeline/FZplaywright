import {Page} from "@playwright/test";
export default class OtpPage{

    constructor(public page :Page){
    }
    async otp1(one : string){
        await this.page.locator('.form-control').first().fill(one);        
            }
        async otp2(two : string){
            await this.page.locator('div:nth-child(2) > .form-control').first().fill(two);
        }
        async otp3(three : string){
            await this.page.locator('div:nth-child(3) > .form-control').first().fill(three);
        }
        async otp4(four : string){
            await this.page.locator('div:nth-child(4) > .form-control').first().fill(four);
        }
        async otp5(five : string){
            await this.page.locator('div:nth-child(5) > .form-control').first().fill(five);
        }
        async otp6(six : string){
            await this.page.locator('div:nth-child(6) > .form-control').first().fill(six
                );
        }
        async otpContinueButton(){
            await Promise.all([
                this.page.waitForNavigation({ waitUntil : "networkidle"}),
                await this.page.getByRole('button', { name: 'Continue' }).click()  
            ])
        }} 