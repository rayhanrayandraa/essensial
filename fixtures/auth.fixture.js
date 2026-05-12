import { test as base, expect } from '@playwright/test';

export const test = base.extend({
    loggedInPage: async ({ page }, use) => {
        await page.goto('https://dev-essensial.assist.id/login');

        await page.locator('#username').fill('fowobag861@inreur.com');
        await page.locator('[data-test="input-password"]').fill('12345678');
        await page.locator('[data-test="login-btn"]').click();

        await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();

        await use(page);
    },
});

export { expect };