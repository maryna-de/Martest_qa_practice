import {Page} from '@playwright/test';

export class CookiesModalPage {
    page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    async acceptCookies() {
        await this.page.locator("//button[@id='onetrust-accept-btn-handler']").click();
    }
}