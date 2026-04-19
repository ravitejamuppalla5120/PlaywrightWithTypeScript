import test, { Browser, BrowserContext, chromium, Page } from "@playwright/test";

test.describe('dropdowns',async ()=>{

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
        await page.goto("https://letcode.in/dropdowns");

    });


    test('dropdowns Messages',async()=>{


       await page.locator("#fruits").selectOption("2");
       await page.locator("#superheros").selectOption([{label:"The Avengers"},{value:"dd"},{index:2}])
       let allvalues=await page.$$("#lang option");
        // let ExtractValues=await allvalues.textContent();
       console.log("THe total count Values" + allvalues.length);
       
       await page.selectOption("#country","India");
       let extractingvalue=await page.$eval<string , HTMLSelectElement>("#country",ele=>ele.value)
       console.log("Extracting the final Dropwdown Values" + extractingvalue);
       
        
        

    
       await page.waitForTimeout(5000);
        

    })
})