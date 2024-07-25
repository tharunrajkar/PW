const {test, expect}=require('@playwright/test');

test('Alert handling', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com');

    //Enabling dialog window handler
    page.on('dialog', async dialog =>{

        await expect(dialog.type()).toContain('alert');
        await expect(dialog.message()).toContain('I am an alert box!');
        await dialog.accept();

    })

    await page.click("//button[.='Alert']");
    await page.waitForTimeout(5000);

})

test('Confirm Alert handling with Ok & Cancel', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com');

    //Enabling dialog window handler
    page.on('dialog', async dialog =>{

        await expect(dialog.type()).toContain('confirm');
        await expect(dialog.message()).toContain('Press a button!');
        await dialog.accept();

    })

    const confirmAlert = await page.locator("//button[.='Confirm Box']");
    await confirmAlert.click();
    await expect(page.locator("//p[.='You pressed OK!']")).toHaveText('You pressed OK!');
    await page.waitForTimeout(5000);

})

test('Prompt Alert handling with Ok & Cancel', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com');

    //Enabling dialog window handler
    page.on('dialog', async dialog =>{

        await expect(dialog.type()).toContain('prompt');
        await expect(dialog.message()).toContain('Please enter your name:');
        await expect(dialog.defaultValue()).toContain('Harry Potter');
        await dialog.accept('saranraj');

    })

    const promptAlert = await page.locator("//button[.='Prompt']");
    await promptAlert.click();
    await expect(page.locator("p#demo")).toHaveText('Hello saranraj! How are you today?');
    await page.waitForTimeout(5000);

})