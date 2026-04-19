import test, { chromium } from "@playwright/test";


test.describe('Running First test case',async()=>{

  test('first Test',async({})=>{
    const browser=await chromium.launch({
      headless:false
    });
     const context=await browser.newContext({
      recordVideo:{
        dir:"./videos/",
        size:{
          width:800,
          height:600
        }
      }
     });
     const page=await context.newPage();
     await page.goto("https://letcode.in/");

    //  await page.locator('"Work-Space"').click();
     await page.click('"Work-Space"');
     await page.getByText(" All in One ").click();
     await page.getByPlaceholder("Text input").nth(0).fill("First Name");
     await page.locator("#lasttname").fill("Last Name");
     await page.locator("#email").fill("Ravitejamuppalla@gmail.com");
    //  await page.locator("//*[@id='countrycode']//parent::div//*[@class='select']").click();
    //  await page.getByText("Austria (+43)").click();
     await page.getByLabel("Male").nth(0).click();
     await page.locator("//input[@type='checkbox']").click();
     await page.locator("//input[@type='submit']").click();
     
    


  });
  // test('Running by page method ',async({page})=>{

  //   await page.goto("https://www.google.com/");
  // })
       
})