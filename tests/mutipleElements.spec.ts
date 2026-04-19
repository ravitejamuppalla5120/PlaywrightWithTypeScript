import test, { Browser, BrowserContext, chromium, Page } from "@playwright/test";

test.describe('Mutiple ELements Values',async ()=>{

    let browser:Browser;
    let context:BrowserContext;
    let page:Page;
    // test.beforeAll(async()=>{
    //         browser=await chromium.launch(
    //         {
    //             headless:false
    //         }
    //     );
    //     context=await browser.newContext();
    //     page=await context.newPage();
    //     await page.goto("https://letcode.in/elements");

    // });
    test.beforeAll(async ({browser})=>{
        page=await browser.newPage();
    })
    test.beforeEach(async()=>{
       await page.goto("https://letcode.in/elements");
    })


    test('Mutiple elements',async()=>{

         
        await page.getByPlaceholder("Enter your git user name eg., ortonikc").fill("ortonikc");
        await page.keyboard.press('Enter');
        await page.waitForSelector("[class='box ng-star-inserted']");
       let allLocators= await page.$$("[class='box ng-star-inserted']");
        
       let fulldetails= await Promise.all(allLocators.map(async(values)=>{ return await values.textContent()}));
       console.log(await fulldetails);
       await page.waitForTimeout(5000);


    })

      test('Mutiple elements Checking',async()=>{


        await page.getByPlaceholder("Enter your git user name eg., ortonikc").fill("ortonikc");
        await page.keyboard.press('Enter');
        await page.waitForSelector("[class='box ng-star-inserted']");
       let allLocators= await page.$$("[class='box ng-star-inserted']");
        
       let fulldetails= await Promise.all(allLocators.map(async(values)=>{ return await values.textContent()}));
       console.log(await fulldetails);
       await page.waitForTimeout(5000);


    })
})