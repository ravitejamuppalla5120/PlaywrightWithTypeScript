import test, { Browser, BrowserContext, chromium, Page } from "@playwright/test";

test.describe('Mouse Wheel',async ()=>{
    test('Moving the Mouse with the wheel',async({page})=>{

        await page.goto("https://playwright.dev/");
        let scroll=await page.locator("//*[contains(text(),'Blog')]");
        // scroll.scrollIntoViewIfNeeded();
        let scrollLocation=await scroll.boundingBox();
        if(scrollLocation){
            let ycoordinate=scrollLocation.y;
             await page.mouse.wheel(0,ycoordinate);
        }

       

       await page.waitForTimeout(5000);
        

    })
})