import { Page } from "@playwright/test";

export default class HeaderPage{


    private page:Page
    constructor(page:Page){
        this.page=page
    }

    public get workspaceButton(){
            return  this.page.locator("#testing")
    }

    
}