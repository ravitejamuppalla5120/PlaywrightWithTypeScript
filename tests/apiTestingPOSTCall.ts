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

    test("Flow 1 For Post call", async ({ request }) => {

        let response = await request.post("https://restful-booker.herokuapp.com/booking", {
          
            headers: {
                "Accept": "application/json",
                "Content-Type":"application/json",
            },
            data:{
                "firstname": "Ravi",
                "lastname": "Teja",
                "totalprice": 901,
                "depositpaid": true,
                "bookingdates": {
                    "checkin": "2018-01-01",
                    "checkout": "2019-01-01"
                },
                "additionalneeds": "Breakfast"
            }
            
        });

        console.log(await response.json());

        await expect(await (await response.json()).booking.firstname).toBe("Ravi");
        await expect(await (await response.json()).booking.lastname).toBe("Teja");
         await expect(await (await response.json()).booking.totalprice).toBe(901);
        await expect(await response.json()).toMatchObject({
  bookingid: Number,
  booking: {
    firstname: 'Ravi',
    lastname: 'Teja',
    totalprice: 901,
    depositpaid: true,
    bookingdates: { checkin: '2018-01-01', checkout: '2019-01-01' },
    additionalneeds: 'Breakfast'
  }
}) 

    })


    
})