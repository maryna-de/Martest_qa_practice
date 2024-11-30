import { test } from '@playwright/test';
import { CartPage } from '../objects/CartPage';
import { CheckoutPage } from '../objects/CheckoutPage';
import { CookiesModalPage } from '../objects/CookiesModalPage';
import { HomePage } from '../objects/HomePage';
import { RegistrationPage } from '../objects/RegistrationPage';
import { SearchPage } from '../objects/SearchPage';

type Pages = {
    cartPage: CartPage;
    checkoutPage: CheckoutPage;
    cookiesModalPage: CookiesModalPage;
    homePage: HomePage;
    registrationPage: RegistrationPage;
    searchPage: SearchPage;
}

export const itemsAdded = test.extend<Pages>({
    page: async({ page, baseURL }, use ) => {
        const homePage = new HomePage(page);
        await homePage.navigateToBaseURL();
    
        const cookiesModalPage = new CookiesModalPage(page);
        await cookiesModalPage.acceptCookies();

        await homePage.openSearch();

        await homePage.searchWithSearchBar("Пальто");
        
        const searchPage = new SearchPage (page);
        await searchPage.clickOnProductWithMoreThanFourSizes();

        await use(page);
    },
})