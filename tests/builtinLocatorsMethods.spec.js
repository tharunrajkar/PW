const {test, expect } = require('@playwright/test');

test('Bult-inLocators',async ({page}) =>
    {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    //page.getByAltText() - to locate an element, usually image, by its text alternative
    const logo = await page.getByAltText('company-branding');
    await expect(logo).toBeVisible();

    //page.getByPlaceholder() - to locate an input by placeholder
    const userName = await page.getByPlaceholder('Username');
    await userName.fill("Admin");
    await page.getByPlaceholder('password').fill("admin123");

    //page.getByRole() - to locate by explicit and implicit accessibility attributes
    await page.getByRole('button',{type: 'submit'}).click();

    //page.getByText() to locate by text content
    const name = await page.locator("//p[@class='oxd-userdropdown-name']").textContent();
    await expect(page.getByText(name)).toBeVisible();
});