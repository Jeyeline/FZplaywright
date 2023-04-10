import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
await page.goto('https://www.skyscanner.co.in/');
await page.click("//*[@id='originInput-label']");
await page.fill("//*[@id='originInput-label']", "Chennai");
await page.click("//*[@id='originInput-input']");

await page.click("//*[@id='destinationInput-label']");
await page.fill("//*[@id='destinationInput-label']", "Mumbai");
await page.click("//*[@id='destinationInput-label']");

await page.getByRole('button', {name : 'Add date'}).first().click();
await page.click("//*[@id='app-root']/div[1]/div/main/div[1]/div/div/div/div[3]/div[2]/div/div[1]/section/div[2]/div[1]/div[2]/div[20]/button");
//await page.click("//*[@data-testid='CalendarSearchButton']");
//await page.click("//*[@id='app-root']/div[1]/div/main/div[1]/div/div/div/div[3]/div[2]");
await page.click("#app-root > div.Routes_container__ODc5Z > div > main > div.Homepage_searchControlsContainer__ZWI2N > div > div > div > div.DateSearchControlsGroup_desktopDatesContainer__ZWZkZ.DateSearchControlsGroup_flexibilDateContainer__ODI1M > div.SearchControlSelectorPopOver_container__ZTFjM.DateSearchControlsGroup_newDatesSelectorPopover__Y2YyN.DateSearchControlsGroup_datesSelectorPopover__NGVhM > div > div.DatePicker_form__Yzg4N > section > div.CustomCalendar_calendarsContainer__NTQyN > div:nth-child(1) > div.CustomCalendar_weekContainer__NmVhM > div:nth-child(23) > button");
//await page.click("//*[@data-testid='CalendarSearchButton']");

//await page.click("//*[@class='SearchControlButton_searchControlBtn__NTM5O CabinClassTravellerSearchControlGroup_traveller__YjExO']")
//await page.selectOption("//*[@class='BpkSelect_bpk-select__NjZjZ CabinClassSelector_select__ODFmO']" , {value : "ECONOMY"})
//await page.click("//*[@id='app-root']/div[1]/div/main/div[1]/div/div/div/div[4]/div[2]/div/div[2]/div[2]/div/button[2]/span/svg");
await page.click("//*[@id='app-root']/div[1]/div/main/div[1]/div/div/div/button");
//await page.click("//*[@id='app-root']/div[1]/div/main/div[1]/div/div/div/button");
await page.click("//*[@id='app-root']/div[1]/div/main/div[1]/div/div/div/div[2]/div[2]/div/button[2]/span[2]")
await page.click("//*[@id='dayview-first-result']/div/div[2]");
await page.click("//*[@id='app-root']/div/div[3]/div[1]/div[6]/div[1]/div[2]/a");

})

