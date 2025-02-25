import { test, expect } from "@playwright/test";
import { LoginPage } from "../page-objects/LoginPage";
import { NavBar } from "../page-objects/components/NavBar";
import { Categories } from "../page-objects/components/Categories";
import { Order } from "../page-objects/Order";

test.describe("Purchase an order", () => {
  let loginpage: LoginPage;
  let navbar: NavBar;
  let categories: Categories;
  let order: Order;

  test.beforeEach(async ({ page }) => {
    loginpage = new LoginPage(page);
    navbar = new NavBar(page);
    categories = new Categories(page);
    order = new Order(page);

    await loginpage.pageLink();
  });

  test("Add products in a shopping cart", async ({ page }) => {
    await navbar.navigationBar("Categories");
    await categories.categoriesDropDown("Hand Tools");

    await order.hummerFilter();
    await order.addProductOne();
    await order.clickAddCart();

    await navbar.navigationBar("Categories");
    await categories.categoriesDropDown("Power Tools");

    await page.locator('input[name ="category_id"]').nth(1).waitFor();

    await order.powerToolFilter();
    await order.addproductTwo();
    await order.clickAddCart();

    await page.click(".svg-inline--fa.fa-cart-shopping"); 
    await order.clickCheckOut();

    await loginpage.fillLogin("evmia@yahoo.com", "evMia12#");
    await order.clickCheckOut();
    await order.clickCheckOut();

    await page.click("#payment-method");
    await page.selectOption("#payment-method", "Cash on Delivery");
    await page.getByRole("button", { name: "Confirm" }).click();
  });

});
