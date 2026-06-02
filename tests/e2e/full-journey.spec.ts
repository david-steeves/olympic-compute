import { test, expect } from '@playwright/test';

test('full anonymous-visitor journey', async ({ page }) => {
  // ── 1. Load homepage ──────────────────────────────────────────────────────
  await page.goto('/');

  // h1 contains the tagline
  await expect(page.getByRole('heading', { level: 1 })).toContainText(
    "Pacific Northwest's AI future"
  );

  // ── 2. All 8 section IDs present and visible ──────────────────────────────
  const sectionIds = [
    'hero',
    'why-bainbridge',
    'site-overview',
    'sustainability',
    'community-partnership',
    'jobs-economy',
    'timeline',
    'faq',
  ];
  for (const id of sectionIds) {
    await expect(page.locator(`#${id}`)).toBeVisible();
  }

  // ── 3. Top-nav subpage links ──────────────────────────────────────────────
  // Sustainability
  await page.getByRole('navigation').getByRole('link', { name: 'Sustainability' }).click();
  await expect(page).toHaveURL(/\/sustainability$/);
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();

  // Community
  await page.goto('/');
  await page.getByRole('navigation').getByRole('link', { name: 'Community' }).click();
  await expect(page).toHaveURL(/\/community-partnership$/);
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();

  // Press
  await page.goto('/');
  await page.getByRole('navigation').getByRole('link', { name: 'Press' }).click();
  await expect(page).toHaveURL(/\/press$/);
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();

  // ── 4. FAQ accordion: first trigger opens ────────────────────────────────
  // Return to the homepage to interact with the FAQ.
  await page.goto('/');

  // Locate the first FAQ question by visible text (a "?" question)
  const firstTrigger = page
    .locator('#faq')
    .getByText('Is Battle Point Park going away?');
  await firstTrigger.scrollIntoViewIfNeeded();
  await firstTrigger.click();

  // After clicking, the answer text becomes visible inside #faq
  await expect(
    page.locator('#faq').getByText(/Replacement Soccer Field Program will deliver/i)
  ).toBeVisible();

  // ── 5. Press page: fact sheet link visible ────────────────────────────────
  await page.goto('/press');
  await expect(
    page.getByRole('link', { name: /fact sheet/i })
  ).toBeVisible();

  // ── 6. Footer contains contact email ────────────────────────────────────
  await page.goto('/');
  await expect(page.locator('footer')).toContainText('community.liaison.ocg@gmail.com');

  // ── 7. Social-share grenade strings present on homepage ──────────────────
  await expect(page.locator('body')).toContainText('Eagle Harbor');
  await expect(page.locator('body')).toContainText('Replacement Soccer Field');
});
