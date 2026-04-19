import { test as bastests,Page,Page as RaviPages } from "@playwright/test";

type raviTeja={
    hey:String,
    newPages:Page
}

const fixture=bastests.extend<raviTeja>({
    hey:"This ravi Teja Muppalla Calling please don't call me",
})



export const raviteja=fixture;