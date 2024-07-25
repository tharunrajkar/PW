const {test, expect} = require('@playwright/test');

test('Bootstrap DropDown', async ({page}) => {

    await page.goto('https://www.jquery-az.com/boots/demo.php?ex=63.0_2');

    const clickButton = await page.locator(".multiselect-selected-text");
    clickButton.click();

    //Assertions
    const options = await page.locator("ul>li a label input");
    await expect(options).toHaveCount(11);

    const option = await page.$$("ul>li a label input");
    await expect(option.length).toBe(11);

    const dropdownOptions = await page.$$ ("ul>li a label");
    for (const value of dropdownOptions){
        const val = await value.textContent();
        console.log(val);

        if(val.includes('Angular') || ('Java')){
            await value.click();
        }

    }

    //Deselect Options
    const Deselectdrop = await page.$$ ("ul>li a label");
    for (const Deselectvalue of Deselectdrop){
        const values = await Deselectvalue.textContent();
        console.log(values);

        if(values.includes('HTML') || ('CSS')){
            await Deselectvalue.click();
        }
    }
     
})