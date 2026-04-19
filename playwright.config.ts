import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */

// Set Selenium Grid URL here
process.env.SELENIUM_REMOTE_URL = 'http://localhost:4444';


export default defineConfig({

  timeout:60000,
  testDir: './tests',
  // globalSetup:"Helpers/GlobalSetup.ts",
  testMatch: ['myFixtures.test.ts'],
  // testMatch: [
  //   // 'tests/example.spec.ts',
  //   // 'tests/fileUpload.spec.ts',
  //   // 'tests/input.spec.ts',
  //   //  'tests/alertPrompt.spec.ts',
  //   // 'tests/dropdown.spec.ts',
  //   // 'tests/WindowHandles.spec.ts',
  //   // 'tests/iFrame.spec.ts',
  //   // '/tests/mutipleElements.spec.ts',
  //   // '/tests/dragAndDrop.spec.ts',
  //   '/tests/myFixtures.test.ts'
  //   //  '/tests/myFixturesSecond.test.ts'
  //   // '/tests/mutipleElementsResponse.spec.ts',
  //   // '/waitAlertPrompt.spec.ts',
  //   // '/mouseWheel.spec.ts',
  //   // '/cliboardCopy.spec.ts',
  //   // '/abortRequest.spec.ts',
  //   // '/mutipleEnv.spec.ts'
  //   // '/apiTestingGetcall.ts'
  //   // '/apiTestingPOSTCall.ts'
  //   // '/apiTestingMocking.ts',
  //     //  '/typeScriptPratice.ts',

  // ],
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter:[ ['html',{open:"never"}]],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
    baseURL: 'https://restful-booker.herokuapp.com/',
    extraHTTPHeaders:{
      "Accept":"application/json"
    },

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [

     {
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'],
        headless:false,
        video:"on",
        screenshot:"on",
        trace:"on",
        
        launchOptions:{
          args:["--start-maximized"],
        }
       },
      
    }

    // {
    //   name: 'chromium',
    //   use: { ...devices['Desktop Chrome'] },
    // },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },


  // globalTeardown:""
});
