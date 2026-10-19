import { test, expect } from '@playwright/test';
import { readExcelDataa } from '../utils/getTextFromExcel';
import {LoginPage} from '../pages/LoginPage';


const LoginData  = readExcelDataa('./testdata/login-data.xlsx');

test.describe('Data-Driven Tests with Unknown Attributes', () => {
 for (const data of LoginData) {

        // if (data.run !== 'yes') continue;

        test(`Login test for - ${data.username}`, async ({ page }) => {

            test.skip(data.run !== 'yes', 'Run Flag=NO');

            await test.step('Go to login page', async () => {
                await page.goto('https://www.saucedemo.com/');
            });

            await test.step('Perform Login', async () => {
                await page.locator('[data-test="username"]').fill(String(data.username));
                await page.locator('[data-test="password"]').fill(String(data.password));
                await page.locator('[data-test="login-button"]').click();
            });

            await test.step('Validate Result', async () => {
                if (data.expected === 'success') {
                    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
                } else {
                    await expect(page.locator('[data-test="error"]')).toBeVisible();
                }
            });

            await page.pause();
        });

        
    }

}); 