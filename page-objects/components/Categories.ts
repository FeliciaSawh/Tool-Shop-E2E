import{Page, Locator} from '@playwright/test'

export class Categories {
    readonly page : Page
    readonly handTools: Locator
    readonly powerTools: Locator
    readonly other: Locator
    readonly specials: Locator
    readonly rentals: Locator

     constructor(page:Page){
        this.page = page
        this.handTools = page.getByText('Hand Tools', {exact: true})
        this.powerTools = page.getByText('Power Tools', {exact: true})
        this.other = page.getByText('Other', {exact: true})
        this.specials = page.getByText('Specials', {exact: true})
        this.rentals = page.getByText('Rentals', {exact: true})
     }

     async categoriesDropDown(tabname){
        switch(tabname){
            case "Hand Tools":
                await this.handTools.click()
                break
            case "Power Tools":
                await this.powerTools.click()
                break
            case "Other":
                await this.other.click()
                break
            case "Specials":
                await this.specials.click()
                break
            case "Rentals":
                await this.rentals.click()
                break
            default:
                throw new Error ("This is not a category...")    

        }

     }

}