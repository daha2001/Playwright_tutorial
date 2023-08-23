import { Page, expect, test } from "@playwright/test";

test("interact with multible tabs", async ({ page })=> {

    await page.goto("https://www.lambdatest.com/selenium-playground/window-popup-modal-demo");
    // console.log(page.url());

   const [multiPage] = await Promise.all([
        page.waitForEvent("popup"),
        page.click("#followboth")
    ])
    await multiPage.waitForLoadState();
    const pages = multiPage.context().pages();
    console.log('Number of tabs: ' + pages.length);

    pages.forEach(tab => {
        console.log(tab.url());
    })

    let facebookPage: Page;
    for (let index = 0; index < pages.length; index++) {
        const url = pages[index].url();
        if (url == "https://www.facebook.com/lambdatest/") {
            facebookPage = pages[index];
        }
    }
     
    await page.waitForTimeout(3000);

    // const [newWindow] = await Promise.all([
    //     page.waitForEvent("popup"),
    //     page.click("'Follow On Twitter'")
    // ])
    // 
    // console.log(newWindow.url());
    // // newWindow.fill("", "")





})