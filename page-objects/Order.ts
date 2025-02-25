import{Page, Locator} from '@playwright/test'

export class Order{
    readonly page: Page
    readonly categoryHummer: Locator
    readonly productOne: Locator
    readonly addproduct: Locator
    readonly categoryPower: Locator
    readonly sander: Locator
    readonly checkOut: Locator

    constructor(page:Page){
        this.page = page
        this.categoryHummer = page.locator('input[name ="category_id"]')
        this.productOne = page.getByText('Claw Hammer', {exact:true})
        this.addproduct = page.getByRole('button', {name:'Add to cart'})
        this.categoryPower = page.locator('input[name ="category_id"]')
        this.sander = page.getByText('Belt Sander', {exact:true})
        this.checkOut = page.getByRole('button', {name:'Proceed to checkout'})
    }

    async clickAddCart(){
        await this.addproduct.click()
    }

    async addProductOne(){
        await this.productOne.click()
    }

    async hummerFilter(){
        await this.categoryHummer.first().check()
    }

    async powerToolFilter(){
        await this.categoryPower.nth(1).check()
    }

    async addproductTwo(){
        await this.sander.click()
    }

    async clickCheckOut(){
        await this.checkOut.click()
    }
}