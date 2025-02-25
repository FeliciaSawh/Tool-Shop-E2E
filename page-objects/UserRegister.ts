import {expect, Page, Locator } from '@playwright/test'

export class UserRegister{
    readonly page: Page
    readonly registerAccount: Locator
    readonly firstName: Locator
    readonly lastName: Locator
    readonly dateBirth: Locator
    readonly street: Locator
    readonly postalCode: Locator
    readonly cityInput: Locator
    readonly stateInput: Locator
    readonly countryInput: Locator
    readonly phone: Locator
    readonly emailInput: Locator
    readonly passwordInput: Locator
    readonly registerBtn: Locator


    constructor( page:Page ) {
        this.page = page
        this.registerAccount = page.getByText('Register your account', {exact: true})

        this.firstName = page.locator('#first_name')
        this.lastName = page.locator('#last_name')
        this.dateBirth = page.getByLabel('Date of birth')
        this.street = page.locator('#street')
        this.postalCode = page.locator('#postal_code')
        this.cityInput = page.locator('#city')
        this.stateInput = page.locator('#state')
        this.countryInput = page.locator('#country')
        this.phone = page.locator('#phone')
        this.emailInput = page.locator('#email')
        this.passwordInput = page.locator('#password')
        this.registerBtn = page.getByRole('button', {name:'Register'}) 
    }
    
    async registerUserBtn() {
        await this.registerAccount.click()
    }

    async registerNewUser(firstName: string, lastName: string, dateBirth:string, street:string, postalCode:string, city:string, state:string, country:string, phone:string, email:string, password:string){
        await this.firstName.fill(firstName)
        await this.lastName.fill(lastName)
        await this.dateBirth.fill(dateBirth)
        await this.street.fill(street)
        await this.postalCode.fill(postalCode)
        await this.cityInput.fill(city)
        await this.stateInput.fill(state)
        await this.countryInput.selectOption(country)
        await this.phone.fill(phone)
        await this.emailInput.fill(email)
        await this.passwordInput.fill(password)
    }

    async registerBtnCl() {
        await this.registerBtn.click()
    }

    async assertSuccesUser() {
        await this.page.waitForURL('https://practicesoftwaretesting.com/auth/login')
        await expect(this.page.url()).toContain('/login')
    }

}