import {Page} from '@playwright/test';

export class HomePage {
    page: Page;
    
    constructor(page: Page) {
        this.page = page;
      }
    
    async navigateToBaseURL() {
        await this.page.goto('');
    }
    
    async openSearch() {
        await this.page.getByTestId("header-search-bar-link").click();
    }

    async searchWithSearchBar(input: string) {
        await this.page.locator(`//*[@class='search-home-input search-home-paragraph-xl']
        `).fill(input);
        await this.page.locator(`//*[@class='search-home-input search-home-paragraph-xl']
        `).press("Enter");
      }
}