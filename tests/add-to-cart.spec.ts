import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://coffee-cart.app/');
 });

test('CS-1 Successful checkout', async ({ page }) => {
  //await page.goto('https://coffee-cart.app/');
  await page.locator('[data-test="Espresso"]').click();
  await page.locator('[data-test="Mocha"]').click();
  await page.locator('[data-test="checkout"]').click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByLabel('Name').click();
  await page.getByLabel('Name').fill('Martest');
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill('email@jj.co');
  await page.getByRole('button', { name: 'Submit' }).click();

  await expect(
    page.getByRole("button", {name:"Thanks for your purchase. Please check your email for payment."})
    ).toBeVisible();
});

//test('CS-1 Successful checkout1', async ({ page }) => {