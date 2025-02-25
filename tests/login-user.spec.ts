import{test, expect} from '@playwright/test'
import { LoginPage } from '../page-objects/LoginPage'



test.describe('Create a new user', () => {
    let loginpage: LoginPage

    test.beforeEach( async ({ page }) => {
        loginpage= new LoginPage(page)
        await loginpage.pageLink()
        await loginpage.clickSignIn.click()
       
    })

    test('Login user with correct credential', async ({page}) => {
        await loginpage.fillLogin('evelinmih@yahoo.com', 'Evemiha15#')
        await expect(page.getByText('My account')).toBeVisible()

    })

    test('Login user with inccorect password/email', async ({page}) => {
        await loginpage.fillLogin('everaducanu@yahoo.com', 'Evelynradu15#')
        await loginpage.asserErrorMess()

    })

})