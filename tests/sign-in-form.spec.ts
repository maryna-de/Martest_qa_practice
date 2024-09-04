import { test, expect } from '@playwright/test';

test('WD-1 Invalid Sign in ', async ({ page }) => {
    await page.goto('https://demo.learnwebdriverio.com/login');
    await page.locator('//input[@placeholder="Email"]').fill("aaa@gm.co");
    await page.locator('//input[@placeholder="Password"]').fill("hdhdgd");
    await page.locator('//button[@class="btn btn-lg btn-primary pull-xs-right"]').click();   
    await expect(
        page.locator('//ul[@class="error-messages"]')
        ).toBeVisible();
});