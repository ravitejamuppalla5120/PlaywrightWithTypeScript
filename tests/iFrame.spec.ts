import test, { Browser, BrowserContext, chromium, Page } from "@playwright/test";

test.describe('I Frames Data',async ()=>{

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
        await page.goto("https://letcode.in/frame");

    });


    test('IFrames',async()=>{

       let framesdetails= await page.frame({name:"firstFr"});
        if(framesdetails!=null){
       await framesdetails.locator("input[name='fname']").fill("Ravi Teja");
       await framesdetails.locator("input[name='lname']").fill("Muppalla");
       let mutipleframes=await framesdetails.childFrames();
       mutipleframes[0]?.getByPlaceholder("Enter email").fill("Ravitejamuppalla@gmail.com");
       }
       else{
        console.log("Entering the Else condition");
        
       }

       await page.waitForTimeout(5000);


    })
})