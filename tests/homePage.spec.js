const {test, expect} =require('@playwright/test');

test('HomePage', async ({page}) =>{

    await page.goto('https://www.demoblaze.com/index.html');

    let pageTittle = await page.title();
    console.log (pageTittle);

   var pageUrl = await  page.url();
   console.log(pageUrl);

   expect(page).toHaveURL(pageUrl);

    await expect(page).toHaveTitle('STORE');
    page.close();

});