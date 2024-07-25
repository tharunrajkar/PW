const {test, expect} = require('@playwright/test')

test('Auto complete dropdown',async ({page}) => {

    await page.goto('https://www.intrcity.com/')

    const from = await page.locator('input#id1');
    await from.fill('Chennai')

    await page.waitForSelector("//li[@class='AutoInput_suggestion__Gri5M']");

    const fromCity = await page.$$("//li[@class='AutoInput_suggestion__Gri5M']");

    for (let departure of fromCity){
        const value = await departure.textContent()
        await console.log(value);

        if(value.includes('Poonamallee, Chennai')){
            await departure.click();
            break;
        }
    }

    await page.waitForTimeout(5000); 
});