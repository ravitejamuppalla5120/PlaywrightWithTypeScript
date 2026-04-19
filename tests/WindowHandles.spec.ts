import test, { Browser, BrowserContext, chromium, expect, Page } from "@playwright/test";

test.describe('window handling',async ()=>{

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
        await page.goto("https://letcode.in/window");

    });


    test('Windows Handling',async()=>{


      
        const [firstWindow]=await Promise.all([
            context.waitForEvent("page"),
            await page.locator("#home").click()
        ])

        await firstWindow.waitForLoadState();
        await firstWindow.click("#testing");
        await firstWindow.waitForLoadState();
        await expect(firstWindow).toHaveURL(/contact/);
        await firstWindow.bringToFront();
         await expect(firstWindow).toHaveURL(/window/);
       
        
        

    
       await page.waitForTimeout(5000);
        

    });

    test('Mutiple Windows Handling',async()=>{

        const [mutipleWindows]=await Promise.all([
            context.waitForEvent("page"),
            await page.locator("#home").click()
        ])

        await mutipleWindows.waitForLoadState();
        let mutipleWidnowsValues=await mutipleWindows.context().pages();
        console.log("Length of windows " + mutipleWidnowsValues.length);
        

        mutipleWidnowsValues.forEach((Values)=>{
            console.log(Values.url());
            
        });
        mutipleWidnowsValues[1].bringToFront();
       await page.on('dialog',async(dialog)=>{
        dialog.accept();
       })
       mutipleWidnowsValues[0].bringToFront();
       

    });
})