import { expect, request } from "@playwright/test"
import test from "@playwright/test"

let request2: any;
test.describe("Doing All Get Calls", async () => {

    test.beforeAll(async () => {
        request2 = await request.newContext({
            baseURL: "https://restful-booker.herokuapp.com/",
            extraHTTPHeaders: {
                "Accept": "application/json"
            }
        })

    })

    test("Flow 1 For Get call", async ({ request }) => {

        let response = await request.get("https://restful-booker.herokuapp.com/booking", {
            headers: {
                "Accept": "application/json"
            }
        });

        console.log(await response.json());
    })


    test("Flow 2 For Get call", async ({ }) => {

        let newContext = request.newContext({
            baseURL: "https://restful-booker.herokuapp.com/",
            extraHTTPHeaders: {
                "Accept": "application/json"
            }
        })
        let response = await (await newContext).get("/booking");
        console.log(await response.json());
    })

    test("Flow 3 For Get call", async ({ }) => {

        let response = await request2.get("/booking");
        console.log(await response.json());

    });

    test("Flow 4 For Get call", async ({ request }) => {

        let response = await request.get("/booking");
        console.log(await response.json());

    });


    test("Flow 5 For Get call", async ({ request }) => {

        let response = await request.get("/booking/47");
        console.log(await response.json());
        await expect(await response.ok()).toBeTruthy();
        await expect(await (await response.json()).firstname).toBe("John");
        await expect(await response.json()).toMatchObject({
        firstname: 'Josh',
        lastname: 'Allen',
        totalprice: 111,
        depositpaid: true,
        bookingdates: { checkin: '2018-01-01', checkout: '2019-01-01' },
        additionalneeds: 'midnight snack'
        }) 
    });

    test("Flow 6 For Get call", async ({ request }) => {

        let response = await request.get("/booking?firstname=John&lastname=Smith");
        console.log("logs URL " + await response.url());
        
        console.log(await response.json());
        console.log(await response.status());
        
        expect(await response.status()).toBe(200);
    });

       test("Flow 7 For Get call", async ({ request }) => {

        let response = await request.get("/booking",{
            params:{
                firstname:"John",
                lastname:"Smith"
            }
        });
        console.log("logs URL " + await response.url());
        
        console.log(await response.json());
        console.log(await response.status());
        
        expect(await response.status()).toBe(200)
    
    });

})