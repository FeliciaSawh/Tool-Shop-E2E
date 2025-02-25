import {test, expect} from '@playwright/test'

test.describe( () => {

    test('Entire page', async({page}) => {
        await page.goto('https://practicesoftwaretesting.com/')
        const pageElement = await page.locator('a.navbar-brand')
        expect(await page.screenshot()).toMatchSnapshot('entire-page.png')
    })

})