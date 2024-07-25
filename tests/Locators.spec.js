import { test, expect } from '@playwright/test';

test('singleElementLocators', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');

  // Click Login button by using "Property"
  const loginButton = await page.locator("//a[@id='login2']");
  await loginButton.click();

  // Enter username by using "CSS Locator"
  await page.fill('input#loginusername', 'admin');

  // Enter password by using "XPath"
  const password = await page.locator("//input[@id='loginpassword']");
  await password.fill('admin');

  // Click Login Button 
  const clickLogin = await page.locator("//button[normalize-space()='Log in']");
  await clickLogin.click();

  // Verify Logout button presence
  const logoutButton = await page.locator("//a[normalize-space()='Log out']");
  await expect(logoutButton).toBeVisible();

  // Multiple Web Elements
  const links = await page.$$('a');
  for (const link of links) {
    const linkText = await link.textContent();
    console.log(linkText);
  }
  
  page.waitForSelector("//div[@id='tbodyid']/div/div/div/h4/a")
  const products = await page.$$("//div[@id='tbodyid']/div/div/div/h4/a");
  for (const product of products) {
    const productName = await product.textContent();
    console.log(productName);
  }
});
