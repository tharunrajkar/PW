const {test, expect} = require('@playwright/test');

test ('Dropdown handling',async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    const country = await page.locator('select#country');

    //Select ByLabel
    await country.selectOption({label: 'India'});
    await page.waitForTimeout(5000);

    //Select ByVisibleText
    await country.selectOption('United Kingdom'); 
    await page.waitForTimeout(5000);

    //Select ByValue
    await country.selectOption({value: 'canada'}); 
    //Select ByIndex
    await country.selectOption({index: 5});
    //Select ByText
    await page.selectOption('select#country','Germany'); 

    //Assertions 
    //Check No.of.Options are available in Dropdown 
    //Approch 1
    const listOfCountries = await page.locator('#country option');
    await expect(listOfCountries).toHaveCount(10);

    //Approch 2
    const availableCountries = await page.$$('#country option');
    console.log(availableCountries.length);
    await expect(availableCountries.length).toBe(10);

    //Check Presence of value in the dropdown - APPROCH 1
    const dropdownContent = await page.locator('select#country').textContent();
    await expect(dropdownContent.includes('United Kingdom')).toBeTruthy();

    //Check Presence of value in the dropdown - APPROCH 1
    const Countries = await page.$$('#country option');
    let status = false;
    for (const content of Countries){
        await console.log(await content.textContent());

        let value = await content.textContent();
        if (value.includes('Germany')){

            status = true;
            break;
        }
    }

    await expect(status).toBeTruthy();

    //Select Option from Dropdown by using Looping
    const availableCountry = await page.$$('#country option');
    for(const country of availableCountry){

        let val = await country.textContent();
        if (val.includes('United States')){

            await page.selectOption('select#country',val);
            break;
        }
    }

    await page.waitForTimeout(3000);
}); 