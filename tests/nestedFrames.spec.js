const {test, expect} = require('@playwright/test');

test('Handle inner frames', async ({page}) => {

    await page.goto('https://ui.vision/demo/webtest/frames/');

    const frame3 = await page.frame({url: 'https://ui.vision/demo/webtest/frames/frame_3.html'});
    const textBox= await frame3.locator("//input[@name='mytext3']");
    await textBox.fill('Saranraj');

    const innerFrames = await frame3.childFrames();
    console.log(innerFrames.length);

    await innerFrames [0].locator("//div[@id='i8']/div[3]/div").click();

    await page.waitForTimeout(5000);

});