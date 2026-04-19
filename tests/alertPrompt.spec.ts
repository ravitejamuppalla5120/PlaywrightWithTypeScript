import test, { Browser, BrowserContext, chromium, Page } from "@playwright/test";

test.describe('ALrets',async ()=>{

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
        await page.goto("https://letcode.in/alert");

    });


    test('Alerting Messages',async()=>{


        await page.on("dialog",(dialog)=>{
            console.log("The Message It is Showing is " +  dialog.message());
            console.log(dialog.defaultValue());
            console.log(dialog.type());
           dialog.accept("Entering the Value in alert")
            
            
            
            
           
        })
        await page.locator("#prompt").click();

       await page.waitForTimeout(5000);
        

    })
})