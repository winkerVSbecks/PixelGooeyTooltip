// @ts-check
import { test, expect } from '@chromatic-com/playwright';

test('has title', async ({ page }) => {
  await page.goto('http://127.0.0.1:8080');
  await expect(page).toHaveTitle(/Segmented Tooltip Animation/);
});

test('displays tooltip', async ({ page }) => {
  await page.goto('http://127.0.0.1:8080');
  await page.locator('css=.trigger').first().hover({ force: true });
  await expect(
    page.locator('css=#tooltip-1 .tooltip__content-desc.glitch')
  ).toHaveCSS('opacity', '1');
});
