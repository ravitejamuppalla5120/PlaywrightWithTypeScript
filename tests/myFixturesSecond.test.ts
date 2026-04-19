import { test } from "../fixtures/myFixturesSecond"
import * as data from "../testData/inputData.json";


test("Descripting Values",async({page,HeaderPage,InputTab})=>{

       await page.goto("https://letcode.in/edit");
     
        
        await InputTab.firstname().fill(data.inputValues.firstName);
        await InputTab.joinInput.focus();
        await InputTab.joinInput.fill(data.inputValues.LastName);
        await InputTab.clearMeInput.fill("");

    //     await page.getByPlaceholder("Enter first & last name").fill("Ravi Teja");
    //     await page.locator("#join").focus();
    //     // await page.keyboard.press("end");
    //     await page.fill("#join"," I am good");
    //    console.log("Extrating the input Text "+ await page.getAttribute("#getMe","value"));
    //    await page.locator("#clearMe").fill("");
       await page.waitForTimeout(5000);
});