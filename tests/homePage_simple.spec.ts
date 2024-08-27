import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  //Navigate to the baseUrl
  await page.goto('/');
});

test.describe('Home Page Tests', () => {
  test('Home Page has expected footer address', async ({ page }) => {
  //Find using css locator
  const footer = await page.locator('.bde-section-16659-174 > .section-container');
  await expect(footer).toHaveText('LawVu Head Office26-28 Wharf Street, Tauranga 3110, New Zealand');
  });

  test('Logo is displayed as expected', async ({page}) => {
    //Find using xPath
    const logoXPath = '/html/body/div[1]/header/div/div/div[2]/div/div[1]/div/figure/div/div/a/img';
    //Wait fot he logo to be visible
    await page.waitForSelector(`xpath=${logoXPath}`, { state: 'visible' })

    const logo = await page.locator(`xpath=${logoXPath}`);
    await expect(logo).toBeVisible;
  });
});