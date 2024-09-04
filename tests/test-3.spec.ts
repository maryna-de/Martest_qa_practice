import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://coffee-cart.app/');
  await page.locator('[data-test="Espresso"]').click();
  await page.locator('[data-test="Espresso_Macchiato"]').click();
  await page.locator('[data-test="Cappuccino"]').click();
  await page.locator('[data-test="Americano"]').click();
  await page.locator('[data-test="Flat_White"]').click();
  await page.locator('[data-test="Mocha"]').click();
  await page.locator('[data-test="checkout"]').click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByLabel('Name').click();
  await page.getByLabel('Name').fill('Martest');
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill('email@jj.co');
  await page.getByRole('button', { name: 'Submit' }).click();
});