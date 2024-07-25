const {test, expect} = require('@playwright/test');

test('softAssertions', async ({page}) =>
{
    await page.goto('https://demoblaze.com/index.html');

    //Hard Assertions 
    await expect(page).toHaveTitle('STORE');
    await expect(page).toHaveURL('https://demoblaze.com/index.html');
    await expect(page.locator('a.navbar-brand')).toBeVisible();

     //Hard Assertions 
     await expect.soft(page).toHaveTitle('STORE339');
     await expect.soft(page).toHaveURL('https://demoblaze.com/index.html');
     await expect.soft(page.locator('a.navbar-brand')).toBeVisible();
});