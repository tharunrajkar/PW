const {test, expect} =require('@playwright/test');

test('handle input', async ({page}) =>
    {
        await page.goto('https://testautomationpractice.blogspot.com');

        //Input FirstName
        expect(await page.locator('input#name')).toBeVisible();
        expect(await page.locator('input#name')).toBeEmpty();
        expect(await page.locator('input#name')).toBeEditable();
        expect(await page.locator('input#name')).toBeEnabled();

        const fName = await page.locator('input#name');
        fName.fill('Saranraj');

        await page.waitForTimeout(5000);

        
})