import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
   await page.goto('https://playwright.dev/');
});

test("PD-1 Search-no results/locator", async ({ page }) => {

//await page.goto('https://playwright.dev/');
await page.getByLabel('Search').click();
await page.getByPlaceholder('Search docs').click();
await page.getByPlaceholder('Search docs').fill('ncnckcn');
   // page.getByText('No results for').first()).toBeVisible();
   await expect(page.locator('text=No results for')).toBeVisible();
});

test('PD-1(1) Search - no results/getByText', async ({ page }) => {
   //await page.goto('https://playwright.dev/');
   await page.getByLabel('Search').click();
   await page.getByPlaceholder('Search docs').click();
   await page.getByPlaceholder('Search docs').fill('ncsfjf');
   await expect(page.getByText('No results for')).toBeVisible();
});


test('PD-2 - Search with redirect', async ({ page }) => {
  //await page.goto('https://playwright.dev/');
  await page.getByLabel('Search').click();
  await page.getByPlaceholder('Search docs').click();
  await page.getByPlaceholder('Search docs').fill('fi');
  await page.locator('#docsearch-item-1').getByRole('link', { name: 'Fixtures' }).click();
  await expect (page).toHaveURL('https://playwright.dev/docs/api/class-fixtures')
});

test('PD-3 - Switch the mode', async ({ page }) => {
 await page.getByLabel('Switch between dark and light').click();
 await 
})