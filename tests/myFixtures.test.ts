import test, { Browser, BrowserContext, chromium, Page } from "@playwright/test";
import HeaderPage from "../pages/Header.page";
import InputTab from "../pages/InputTab.page";
import * as data from "../testData/inputData.json";

test.describe('Different Input Files',async ()=>{

    let browser:Browser;
    let context:BrowserContext;
    let page:Page;
    let HeaderPageLoc:HeaderPage;
    let inputTabLoc:InputTab
    // test.beforeAll(async({page})=>{
    //     //     browser=await chromium.launch(
    //     //     {
    //     //         headless:false
    //     //     }
    //     // );
    //     // context=await browser.newContext();
    //     // page=await context.newPage();
    //     await page.goto("https://letcode.in/edit");
    //     HeaderPageLoc=new HeaderPage(page);
    //     inputTabLoc=new InputTab(page);

    // });


    test('uploading with our input files',async({page})=>{

         await page.goto("https://letcode.in/edit");
        HeaderPageLoc=new HeaderPage(page);
        inputTabLoc=new InputTab(page);
        
        await inputTabLoc.firstname().fill(data.inputValues.firstName);
        await inputTabLoc.joinInput.focus();
        await inputTabLoc.joinInput.fill(data.inputValues.LastName);
        await inputTabLoc.clearMeInput.fill("");

    //     await page.getByPlaceholder("Enter first & last name").fill("Ravi Teja");
    //     await page.locator("#join").focus();
    //     // await page.keyboard.press("end");
    //     await page.fill("#join"," I am good");
    //    console.log("Extrating the input Text "+ await page.getAttribute("#getMe","value"));
    //    await page.locator("#clearMe").fill("");
       await page.waitForTimeout(5000);
        

    })
})