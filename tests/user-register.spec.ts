import{test, expect} from '@playwright/test'
import { LoginPage } from '../page-objects/LoginPage'
import { UserRegister } from '../page-objects/UserRegister'


test.describe('Create a new user', () => {
    let loginpage: LoginPage
    let userRegister: UserRegister

    test.beforeEach( async ({ page }) => {
        loginpage = new LoginPage(page)
        userRegister = new UserRegister(page)

        await loginpage.pageLink()
        await loginpage.buttonSignIn()
        await userRegister.registerUserBtn()   
    })

    test('Register a new user', async ({page}) => { 
        await userRegister.registerNewUser('eve', 'mia', '2000-02-02', 'creekside', '88989', 'Houston', 'texas', 'Albania', '34363637338', 'evmia@yahoo.com', 'evMia12#')
        await userRegister.registerBtnCl()
        await userRegister.assertSuccesUser()
    })


})