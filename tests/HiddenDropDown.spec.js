const {test, expect}=require('@playwright/test');

test('Hiddeen Dropdown handling',async ({page}) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    const UserName = await page.getByPlaceholder('Username');
    await UserName.fill('Admin');
    const PassWord = await page.getByPlaceholder('Password');
    await PassWord.fill('admin123');

    const login = await page.locator("//button[.=' Login ']");
    await login.click();
    await page.click("//span[.='PIM']");
    
    await page.waitForSelector("(//i[@class='oxd-icon bi-caret-down-fill oxd-select-text--arrow'])[3]");

    const employeeRole = await page.locator("(//i[@class='oxd-icon bi-caret-down-fill oxd-select-text--arrow'])[3]");
    await employeeRole.click();

    await page.waitForSelector("//div[@role='listbox']//span");

    const opennings = await page.$$("//div[@role='listbox']//span");

    for (let requirements of opennings){
        let value = await requirements.textContent();
        await console.log(await requirements.textContent());

        if (value.includes('VP - Sales & Marketing')){
            await requirements.click();
            break;
        }
    }

    await page.waitForTimeout(5000);

})