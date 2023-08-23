import { expect, test } from "@playwright/test";

test("interact with frames", async ({ page }) => {
    
    await page.goto("https://letcode.in/frame")
    const allframes = page.frames();
    console.log("Antal frames: " + allframes.length);

    const frame = page.frameLocator("#firstFr")
    await frame.locator("input[name='fname']").fill("Daniel")
    await frame.locator("input[name='lname']").fill("Håkansson")
    
    const innerFrame = frame.frameLocator("iframe[src='innerFrame']")
    await innerFrame.locator("input[name='email']").fill("minEmailAdress@EmailAdress.com")
    
    await frame.locator("input[name='fname']").fill("hejhejhej")

    // const myFrame = page.frame("firstFr")
    // if (myFrame != null) {
    //     
    //     await myFrame?.fill("input[name='fname']", "Daniel")
    //     await myFrame.fill("input[name='lname']", "Håkansson")
    //     
    // }
    // // await myFrame?.fill("input[name='fname']", "Daniel")
    // // await myFrame?.fill("input[name='lname']", "Håkansson")
    // expect(await myFrame?.locator("p.title.has-text-info").textContent()).toContain("You have entered")
    // 
     await page.waitForTimeout(3000);

})