import{Page, Locator} from '@playwright/test'

export class NavBar{
    readonly page: Page
    readonly homebar: Locator
    readonly contactBar: Locator
    readonly signBar: Locator
    readonly categoryBar: Locator
  
    constructor(page:Page){
        this.page = page
        this.contactBar = page.getByRole('button', {name:'Contact'})
        this.homebar = page.getByRole('button', {name:'Home'})
        this.categoryBar = page.getByRole('button', {name:'Categories'})
        this.signBar = page.getByRole('button', {name:'Sign in'})
    }

    async navigationBar(tabname){
        switch(tabname){
            case "Home":
                await this.homebar.click()
                break
            case "Categories":
                await this.categoryBar.click()
                break
            case "Contact":
                await this.contactBar.click()
                break
            case "Sign In":
                await this.signBar.click()
                break 
            default:
                throw new Error('This tab not exist..')   
    
        }

    }
}
