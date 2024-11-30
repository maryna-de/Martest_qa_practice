import {Page} from '@playwright/test';

export class CheckoutPage {
    page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    async clickOnRegister() {
        await this.page.locator("").click();
    }
}