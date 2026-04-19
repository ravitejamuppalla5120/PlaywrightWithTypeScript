import HeaderPage from "../pages/Header.page";
import InputTab from "../pages/InputTab.page";
import { test as bastests,Page,Page as RaviPages } from "@playwright/test";


type ojectValues={
    HeaderPage:HeaderPage,
    InputTab:InputTab
}

const fixture=bastests.extend<ojectValues>({

    HeaderPage: async({page},use)=>await use(new HeaderPage(page)),
    InputTab:async({page},use)=>await use(new InputTab(page) )

})



export const test=fixture;