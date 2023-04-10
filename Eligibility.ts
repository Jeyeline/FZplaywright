import {Page} from "@playwright/test";
export default class eligibility{
    constructor(public page : Page){

    }
    async pan(number : string){
        await this.page.fill("//*[@id='mat-input-18']", number )
    }
    async date1(){
        await this.page.click("//*[@id='main-content-wrapper']/fg-client-main-nav/mat-sidenav-container/mat-sidenav-content/div[2]/fg-form/div[2]/div/div/form/div/div[1]/fieldset/div/div[3]/div/fg-custom-container/div/div/div[2]/div/div[1]/div/div/div/div/fg-custom-container/div/div/div[3]/div/div[1]/div[2]/div/div/div/fg-input/div/mat-form-field/div/div[1]/div[4]/mat-datepicker-toggle/button/span[1]/svg")
    }
    async date2(){
        await this.page.getByRole("button", {name:"MAR 2023"}).click()
    }
    async date3(){
        await this.page.click("//*[@id='mat-datepicker-1']/mat-calendar-header/div/div/button[2]")
    }
    async date4(){
        await this.page.click("//*[@id='mat-datepicker-1']/div/mat-multi-year-view/table/tbody/tr[2]/td[2]/button/div[2]")
    }
    async date5(){
        await this.page.click("//*[@id='mat-datepicker-1']/div/mat-year-view/table/tbody/tr[2]/td[2]/button/div[1]")
    }
    async date6(){
        await this.page.click("//*[@id='mat-datepicker-1']/div/mat-month-view/table/tbody/tr[5]/td[2]/button/div[1]")
    }
    async checkbox(){
        await this.page.click("//*[@id='mat-checkbox-8']/label/span[1]")
    }
    async Continue(){
        await this.page.getByRole("button", {name:"Continue"}).click()
       }

}