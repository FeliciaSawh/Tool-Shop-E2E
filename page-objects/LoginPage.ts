import {Locator, Page, expect} from '@playwright/test'

export class LoginPage {
    readonly page: Page
    readonly clickSignIn: Locator
    readonly emailLogin: Locator
    readonly password: Locator
    readonly clickLogIn: Locator
    readonly errorMess: Locator

    constructor(page:Page) {
        this.page = page
        this.clickSignIn = page.getByRole('link', {name: "Sign in"})
        this.emailLogin = page.locator('input[type="email"]')
        this.password = page.locator('input[type="password"]')
        this.clickLogIn = page.getByRole('button', {name:'Login'})
        this.errorMess = page.locator('.help-block') 
    }

    async pageLink(){
        await this.page.goto('https://practicesoftwaretesting.com/')
    }

    async buttonSignIn(){
        await this.clickSignIn.click()
    }

    async fillLogin(email: string, password: string){
        await this.emailLogin.fill(email)
        await this.password.fill(password)
        await this.clickLogIn.click()
    }

    async asserErrorMess() {
        await expect(this.errorMess).toContainText('Invalid email or password')
    }



}