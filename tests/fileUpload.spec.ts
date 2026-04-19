import test, { chromium } from "@playwright/test";

test.describe('Uploading the Files',async ()=>{

    test('uploading with input file ',async()=>{

        let file0="../Playwright/PDFFiles/Sample1.pdf";
        let file1="../Playwright/PDFFiles/Sample2.pdf"
        const browser=await chromium.launch(
            {
                headless:false
            }
        );
        const context=await browser.newContext();
        const page=await context.newPage();
        await page.goto("https://letcode.in/file")
        await page.setInputFiles("input[name='resume']",file0);
       await page.waitForTimeout(5000);

    })

    test('uploading with our input files',async()=>{

        let file0="../Playwright/PDFFiles/Sample1.pdf";
        let file1="../Playwright/PDFFiles/Sample2.pdf"
        const browser=await chromium.launch(
            {
                headless:false
            }
        );
        const context=await browser.newContext();
        const page=await context.newPage();
        await page.goto("https://the-internet.herokuapp.com/upload")
        await page.on('filechooser',(filechooser)=>(
            filechooser.setFiles(file0)
        ));
        await page.locator("#drag-drop-upload").click();
       await page.waitForTimeout(5000);

    })
})