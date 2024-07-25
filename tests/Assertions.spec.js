const {test, expect } = require('@playwright/test');
const exp = require('constants');

test('AssertionsTest', async ({page}) => {
    await page.goto('https://demo.nopcommerce.com/register');

    // Page has URL
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register');

    // Page has title
    await expect(page).toHaveTitle('nopCommerce demo store. Register');

    // Element is visible
    const logo = await page.locator('.header-logo');
    await expect(logo).toBeVisible();

    // Element is enabled
    const searchBox = await page.getByPlaceholder('Search store');
    await expect(searchBox).toBeEnabled();

    // Radio/Checkbox is checked
    const clickMaleRadioButton = await page.locator('input#gender-male');
    await clickMaleRadioButton.click();
    await expect(clickMaleRadioButton).toBeChecked();

    // Radio/Checkbox is checked
    const checkboxNewsLetter = await page.locator('input#Newsletter');
    await expect(checkboxNewsLetter).toBeChecked(); 

    // Element has attribute
    const clickRegister = await page.locator('#register-button');
    await expect(clickRegister).toHaveAttribute('type','submit');

    // Element matches text
    const Register = await page.locator('.page-title h1');
    expect(Register).toHaveText('Register');

    // Element contains text
    expect(await page.locator('.page-title h1')).toContainText('Register');

    // Input has a value
    const fName = await page.locator('input#FirstName');
    await fName.fill('Saranraj');
    await expect(fName).toHaveValue('Saranraj');
    
    // List of elements has given length
    const month = await page.locator("select[name='DateOfBirthMonth'] option");
    await expect(month).toHaveCount(13);
})