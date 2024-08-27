import { test, expect } from '@playwright/test';

test('User with incorrect email and password are presented with the correct validation message', async ({ page }) => {
  //Navigate to the baseUrl
  await page.goto('/');

  await expect(page).toHaveURL('https://lawvu.com/');

  const loginPageTab = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Login' }).click();

  const loginPage = await loginPageTab;
  await loginPage.getByPlaceholder('Enter your email to continue').click();
  await loginPage.getByPlaceholder('Enter your email to continue').fill('test@test.com');
  await loginPage.getByLabel('Next').click();
  await loginPage.getByPlaceholder('Your password').click();
  await loginPage.getByPlaceholder('Your password').fill('test');
  await loginPage.getByLabel('Next').click();

  const errorMessage = await loginPage.locator('.form-feedback.ng-tns-c2478384120-0.active');

  await expect(errorMessage).toHaveText('Login failed. Please try again.');
});