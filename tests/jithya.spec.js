import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://jithya.sandboxtrial.com/login?&chkie=true');
  await page.fill('#username','dentalclinic@gmail.com');
  await page.fill('#password','demo@123');
  await page.click('#signinbutton');
  await expect(page).toHaveURL("https://jithya.sandboxtrial.com/dashboard");
  await page.locator('#logout').click();
  
});