import { Page } from "@playwright/test";

export default class InputTab{

    private page:Page
    constructor(page:Page){
        this.page=page
    }

    firstname=()=>this.page.getByPlaceholder("Enter first & last name");
    public get joinInput(){
        return this.page.locator("#join");
    }

    public get clearMeInput(){
        return this.page.locator("#clearMe");
    }




}