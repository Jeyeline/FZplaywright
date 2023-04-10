import {Page} from "@playwright/test";
export default class findCarPage{
    constructor(public page : Page){

    }
    async findcar(){
        await this.page.getByRole("link",{name:"Find Cars"}).click()
    }
    async chooseCar(){
        await this.page.getByRole("link", {name:"Kia Seltos"}).click()
    }
    async checkELigibility(){
        await this.page.click("//*[@id='main-content-wrapper']/fg-client-main-nav/mat-sidenav-container/mat-sidenav-content/div[2]/fg-form/div[2]/div/div/form/div/div[1]/fieldset/div/div[2]/div/fg-custom-container/div/div/div/div/div[1]/div/div/div[2]/div/fg-custom-container/div/div/div[1]/div/div[1]/div[2]/div/div/div/fg-custom-container/div/div/div/div/fg-card/div/mat-card/mat-card-content/div/div[8]/div/div[1]/div[1]/div/div[1]/div/fg-custom-container/div/div/div/div/fg-single-action/fg-action-builder-actions/button")
    }
    
    

}