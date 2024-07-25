const {test, expect} = require('@playwright/test');

test('CheckBoxes', async ({page}) =>{
await page.goto('https://testautomationpractice.blogspot.com/');

//Single CheckBoxes
await page.locator('input[value=monday]').check();

expect (await page.locator('input[value=monday]')).toBeChecked();
expect (await page.locator('input[value=monday]').isChecked()).toBeTruthy();

expect(await page.locator('input#sunday').isChecked()).toBeFalsy();

//Multiple CheckBoxes

const checkBoxLocators =["input[value=monday]",'input#sunday','#friday']

for(const cBox of checkBoxLocators){
    await page.locator(cBox).check();
}

for(const cBox of checkBoxLocators){
    if(await page.locator(cBox).isChecked()){
        await page.locator(cBox).check();
    }
    
}
await page.waitForTimeout(5000);
})