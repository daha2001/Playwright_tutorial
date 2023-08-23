import { expect, test } from "@playwright/test";

 test("Interaction with inputs", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
    // await page.fill("input#user-message", "Oouh Herro there!") // funkar också ist för ->
    const messageInput = page.locator("input#user-message");
    await messageInput.scrollIntoViewIfNeeded();
    console.log('before entering data: ' + await messageInput.getAttribute("placeholder"));
    await expect(messageInput).toHaveAttribute("placeholder", "Please enter your Message")
    await messageInput.type("Oouh Herro there!");
    console.log('after entering data: ' + await messageInput.inputValue());
    
    await page.waitForTimeout(2000);
 }) 
 



 test("Sum", async ({ page }) => {
await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");

const sum1input = page.locator("#sum1")
const sum2input = page.locator("#sum2")
const getValuesBtn = page.locator("form#gettotal>button")
const getResult = page.locator("#addmessage")

await sum1input.type("700");
await sum2input.type("300");
await getValuesBtn.click();
await expect(getResult).toHaveText("1000");

await page.waitForTimeout(2000);
})



test("Checkbox", async ({page}) => {
await page.goto("https://www.lambdatest.com/selenium-playground/checkbox-demo");

const singleCheckbox = page.locator("id=isAgeSelected");
expect(singleCheckbox).not.toBeChecked();
await singleCheckbox.check();
expect(singleCheckbox).toBeChecked();
// await page.locator("id=isAgeSelected").click();
await page.waitForTimeout(2000);
})