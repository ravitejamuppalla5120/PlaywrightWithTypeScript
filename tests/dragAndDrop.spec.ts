import test, { Browser, BrowserContext, chromium, Page } from "@playwright/test";

test.describe('Mutiple ELements Values',async ()=>{

    let browser:Browser;
    let context:BrowserContext;
    let page:Page;
    test.beforeAll(async()=>{
            browser=await chromium.launch(
            {
                headless:false
            }
        );
        context=await browser.newContext();
        page=await context.newPage();
        await page.goto("https://www.globalsqa.com/demo-site/draganddrop/");

    });


    test('Mutiple elements',async()=>{


       await page.waitForSelector("[src='images/high_tatras2_min.jpg']")
        await page.locator("[src='images/high_tatras2_min.jpg']").dragTo(page.locator("#trash"))
       await page.waitForTimeout(5000);


    })
})