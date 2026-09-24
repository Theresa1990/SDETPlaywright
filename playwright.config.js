// @ts-check
import { chromium , defineConfig, devices } from '@playwright/test';
import { TIMEOUT } from 'node:dns';


/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config =({
  testDir: './tests',
  timeout: 50*1000,
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    browserName:'chromium',
    
    

  },

  /* Configure projects for major browsers */
  
});
module.exports = config
