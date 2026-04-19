import test, { Browser, BrowserContext, chromium, Page } from "@playwright/test";
import clipboard from 'clipboardy';


test.describe.parallel('Mouse Wheel',async ()=>{
    test('Moving the Mouse with the wheel',async({page})=>{

        await page.goto("https://clipboardjs.com/");
        await page.locator("#example-text button").click({force:true});
        let read=await clipboard.read()
        console.log("Reading the Value   " + read);
        
       await page.waitForTimeout(5000);
        

    })

    test("Openign the URl In New with clipBoard",async ({page})=>{
        await page.goto("https://clipboardjs.com/");
        await page.locator("#example-target button").click();
         let read=await clipboard.read()
        await page.context().newPage();
        await page.goto(read);
        console.log(await page.url());
        


    })
})