import {Page} from '@playwright/test';

export class SearchPage {
    page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    async clickOnProductWithMoreThanFourSizes() {
        const products = await this.page.locator("[data-productid]").all();
        
        for (const product of products) {
            const secondLineCount = (
            await product.locator(".product-size-info__second-line").all()).length;
                
        if (secondLineCount <= 4) {
            await product.click();
            break;
        }

        }
    }};