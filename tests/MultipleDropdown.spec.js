const {test, expect}=require('@playwright/test')

test('MultipleDropdown',async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    //SelectOption

    await page.selectOption('select#colors',['Blue', 'Red', 'Green']);

    //Assertions
    //Check Number of Options In Dropdown
    const options = await page.locator("select#colors option");
    await expect(options).toHaveCount(5);

    //Check Number of Options In Dropdown using JScript Array
    const colours = await page.$$('select#colors option');
    console.log(colours.length);
    await expect(colours.length).toBe(5);

    //Check Presence Value in Dropdown
    const ListOfColours = await page.locator('select#colors').textContent();
    await expect(ListOfColours.includes('Red')).toBeTruthy();
    await expect(ListOfColours.includes('Purple')).toBeFalsy();


});