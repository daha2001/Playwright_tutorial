import { expect, test } from "@playwright/test"

test("handling first alert", async ({ page }) => {
await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");

    page.on("dialog", async (alert) => {
    const textFromAlert = alert.message();
    console.log(textFromAlert);
    
        await alert.dismiss();
    })

    await page.locator("button:has-text('Click Me')").nth(1).click();
    expect(page.locator("id=confirm-demo")).toContainText("You pressed Cancel!");
})


test("handling second alert", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");

    page.on("dialog", async (alert) => {
        const textFromAlert = alert.defaultValue();
        console.log(textFromAlert);
        
        await alert.accept("Daniel");
    })
    
    await page.locator("button:has-text('Click Me')").nth(2).click();
    expect(page.locator("id=prompt-demo")).toContainText("You have entered");
    
    await page.waitForTimeout(5000);
})

test("handling third alert", async ({ page }) => {
await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-modal-demo");

/*page.on("dialog", async (alert) => {
    const textFromAlert = alert.defaultValue();
    console.log(textFromAlert);
    
    // await alert.accept();
})
*/
await page.click("//button[@data-target='#myModal']");
await page.click("(//button[text()='Save Changes'])[1]");
})
