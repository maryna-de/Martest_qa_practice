import {Page} from '@playwright/test';

export class RegistrationPage {
    page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    //async fillSurname(surname: string) {
    //    await this.page.locator('[id="customerLastname"]').fill(surname);
    //    await expect(this.page.locator(`//input[@id="customerLastname"][@value='${surname}']`)).toBeVisible();
    //  }
    
    //async fillName(name: string) {
     //   await this.page.locator('[id="customerFirstname"]').fill(name);
     //   await expect(this.page.locator(`//input[@id="customerFirstname"][@value='${name}']`)).toBeVisible();
     // } 
 }