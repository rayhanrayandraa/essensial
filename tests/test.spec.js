import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://dev-essensial.assist.id/login');
  
  await page.locator('#username').fill('rayhanrayandra.work.id@gmail.com');
  await page.locator('[data-test="input-password"]').fill('12345678');
  await page.locator('[data-test="login-btn"]').click();
  
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
});