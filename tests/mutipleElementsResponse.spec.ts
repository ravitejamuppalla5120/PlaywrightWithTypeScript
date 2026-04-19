import test from "@playwright/test";



test('Response API ',async({page})=>{
    await page.goto("https://letcode.in/elements");
    
    let [Response]=await Promise.all([

        page.waitForResponse(res=>
            res.status()==200
            && 
            res.url()=="https://api.github.com/users/ortonikc"
            &&
            res.body().then(b=>{
                return b.includes("ortoniKC")
            })

        ),
        await page.getByPlaceholder("Enter your git user name eg., ortonikc").fill("ortonikc"),
        await page.keyboard.press('Enter'),
    ])

    console.log(await Response.json());
    

})