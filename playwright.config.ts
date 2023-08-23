import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
   testMatch:["tests/windows.test.ts"],
  use: {
    headless: false,
    screenshot: "on",
    video: "retain-on-failure",
    launchOptions: {
      slowMo: 1000
    }
  },
  retries: 0, // omkörningar
  reporter: [["dot"], ["json", {
    outputFile: "jsonReports/jsonReport.json"
  }], ["html", {
    open: "never"
  }]]
};

export default config;
  


/*
npx playwright test
npx playwright codegen
playwright.dev
https://ecommerce-playground.lambdatest.io/
https://www.youtube.com/watch?v=wawbt1cATsk   ca 2h 24 min
*/