const{test, expect}=require('@playwright/test');

test('RadioButton', async({page})=>
{
    await page.goto('https://testautomationpractice.blogspot.com/');


    await page.locator('input#male').check();
    await expect (await page.locator('input#male')).toBeChecked()
    await expect (await page.locator('input#male').isChecked()).toBeTruthy();

    await expect(await page.locator("//input[@value='female']").isChecked()).toBeFalsy();
})