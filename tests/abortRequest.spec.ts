import test, { Browser, BrowserContext, chromium, Page } from "@playwright/test";
import clipboard from 'clipboardy';


test.describe.parallel('Abourt Request Data',async ()=>{
    test('Abourt Request',async({page})=>{

        await page.route("**/**",request=>{
            request.request().url().startsWith("https://www.istockphoto.com/")? request.abort:request.continue;
        })
        await page.goto("https://unsplash.com/s/photos/people");
       
        
       await page.waitForTimeout(5000);
        

    })
})