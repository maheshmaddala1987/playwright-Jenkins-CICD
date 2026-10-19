import { test, expect } from '@playwright/test';
import { readExcel } from '../utils/excelReader';
import { LoginPage } from '../pages/LoginPage';


interface LoginData {
    username: string;
    password: string;
    run: string;
    expected: string;
}

const testData: LoginData[] = readExcel('./testdata/login-data.xlsx', 'Sheet1');

test.describe('Login Tests', () => {

    for (const data of testData) {

        // if (data.run !== 'yes') continue;

        test(`Login test for - ${data.username}`, async ({ page }) => {

            const loginPage = new LoginPage(page);

            test.skip(data.run !== 'yes', 'Run Flag=NO');

            await test.step('Go to login page', async () => {
                //await page.goto('https://www.saucedemo.com/');
                loginPage.gotoLoginPage();
            });

            await test.step('Perform Login', async () => {

                loginPage.login(data.username,data.password);
                //await page.locator('[data-test="username"]').fill(data.username);
                //await page.locator('[data-test="password"]').fill(data.password);
                //await page.locator('[data-test="login-button"]').click();
            });

            await test.step('Validate Result', async () => {
                if (data.expected === 'success') {
                    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
                } else {
                    await expect(page.locator('[data-test="error"]')).toBeVisible();
                }
            });
        });
    }

});