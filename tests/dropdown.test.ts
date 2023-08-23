import { test } from "@playwright/test";

test("dropdown", async ({ page }) => {
await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo");
await page.selectOption("#select-demo", {
   // label: "Tuesday"
   // value: "Friday"  
      index: 1
})
await page.waitForTimeout(5000);

await page.selectOption("#multi-select", [{
    label: "Texas"
}, {
    index: 2
     }, {
        value: "Washington"
     }
    ])
})

test.only("Bootstrap dropdown", async ({ page }) => {
await page.goto("https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo");
await page.click("#country+span");
await page.locator("ul#select2-country-results")
    .locator("li", {        // element inuti element: id -> span -> ul -> li
        hasText: "India"
}).click()
await page.waitForTimeout(3000);
})