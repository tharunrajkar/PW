const {test, expect}=require('@playwright/test');

test('Handling frames',async ({page}) => {

   await page.goto('https://ui.vision/demo/webtest/frames/');

   //to find no of Frames in a webPage

   const noOfFrames = await page.frames();
   await console.log(noOfFrames.length);

   const frame1 = await page.frame({url: 'https://ui.vision/demo/webtest/frames/frame_1.html'});
   await frame1.fill("input[name='mytext1']",'Saranraj');
   await page.waitForTimeout(5000);

   const user = await page.frameLocator("frame[src='frame_1.html']").locator("input[name='mytext1']");
   await user.fill("tharunraj");
   await page.waitForTimeout(5000);
   
})