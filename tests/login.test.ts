import {chromium, test} from "@playwright/test"

test("Login test demo", async () => {
const bajskorv = await chromium.launch({
    headless: false
});
const context = await bajskorv.newContext();
const page = await context.newPage();
 

await page.goto("https://ecommerce-playground.lambdatest.io/")
// kopierat xpath rakt av
await page.locator('//*[@id="widget-navbar-217834"]/ul/li[6]/a/div/span').hover()

// vet ej hur man får fram
// await page.hover("//a[@data-toggle='dropdown']//span[contains(.,'My account')]")

// alternativ för text=
// await page.click("text=Login")
await page.click("'Login'")

await page.fill("input[name='email']", "koushik350@gmail.com")
await page.fill("input[name='password']", "Pass123$")
await page.click("input[value='Login']");

await page.waitForTimeout(5000);

const nyttFönster = await bajskorv.newContext()

const nyFlik = await nyttFönster.newPage();
await nyFlik.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/account")

await page.waitForTimeout(5000);
}) 










