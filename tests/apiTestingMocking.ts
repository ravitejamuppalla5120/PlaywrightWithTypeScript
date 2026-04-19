import { expect, request } from "@playwright/test"
import test from "@playwright/test"

let request2: any;
test.describe("Doing All Get Calls", async () => {

  

    // test("Flow 1 For Get call", async ({ page }) => {

    //     await page.route("**/api/v1/fruits", async(route)=>{

    //         await route.fulfill({
    //             status:200,
    //             contentType:"application/json",
    //             body:JSON.stringify([
    //                 {id:71,name:"Cypress"},
    //                 {id:73,name:"WebdriverIO"},
    //                 {id:74,name:"Playwright"}
    //             ])
    //         })
    //     })

    //     await page.goto("https://demo.playwright.dev/api-mocking/");
    //     await page.waitForTimeout(5000)
    // })
    
    test("Flow 1 For Get call", async ({ page }) => {

       

        await page.goto("https://demo.playwright.dev/api-mocking/");

        await page.on("request",request=>{
            console.log(request.method(),request.url());
            
        })
        await page.on('response',async response=>{
           
            console.log(await  response.status(),await response.url(),await response.body(),await response.allHeaders());
            
        })
        // await page.waitForTimeout(5000)
    })
    

})