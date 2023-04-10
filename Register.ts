import {Page} from "@playwright/test";
export default class RegisterPage{

    constructor(public page :Page){

    }
    async mumbai(){
        await this.page.click('//*[@id="mat-dialog-0"]/fg-modal-dialog/form/div/div[2]/div/fg-modal-body/div/div[2]/div/fg-custom-container/div/div/div/div/fg-client-context-switcher/div/div[2]/div/div[1]/div[1]/div[1]')
        
            }async login(){
                await this.page.getByRole('button', {name : 'Login'}).click()
                
                    }async newUser(){
                        await this.page.getByText(' Start here').click();
                        
                            }
   async enterFirstName(firstname: string){
await this.page.fill("//*[@id='mat-input-25']", firstname)

    }
    async enterLastName(lastname: string){
        await this.page.fill("//*[@id='mat-input-26']", lastname)
        
            }
            async enterEmail(email: string){
                await this.page.fill("//*[@id='mat-input-27']", email)                
                    }
                    async enterPhone(phone: string){
                        await this.page.fill("//*[@id='mat-input-28']", phone)                        
                            }
                            async privacyPolicy(){ 
                                await this.page.click("//*[@id='mat-checkbox-1']/label/span[1]")
                                
                                    }
                                    async registerButton(){
                                       // await this.page.getByRole('button',{name :'Register'}).click()
                                        await this.page.click("//*[@id='mat-tab-content-2-0']/div/div[2]/div/div/fg-custom-container/div/div/div[1]/div/div[1]/div[2]/div/div[3]/div/fg-single-action/fg-action-builder-actions/button")
                                        
                                            }

}