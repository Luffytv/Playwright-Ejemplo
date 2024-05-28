const { test, expect } = require('@playwright/test');

test.beforeEach(async ({page})=> {
    await page.goto('http://localhost:3000')
});

test.describe('Testing Form', ()=> {

    test('deberia mostrar mensaje correcto', async ({ page }) => {
        await page.getByLabel('Name', {exact: true}).fill('Lucas');
        await page.getByLabel('Surname').fill('Perez');
        await page.getByLabel('Username').fill('Luffytv');
        await page.getByLabel('Email').fill('Lucasriver55@hotmail.com');
        await page.getByLabel('Password').fill('contra123');

        await page.getByRole('button').click();
        const p = await page.getByTestId('message');

        await expect(p).toBeVisible();
        await page.pause();
    });

    test('deberian borrarse los campos de texto', async ({ page }) => {
        const inputName = await page.getByLabel('Name', { exact: true})
        const inputSurname = await page.getByLabel('Surname')
        const inputUsername = await page.getByLabel('Username')
        const inputEmail = await page.getByLabel('Email')
        const inputPassword = await page.getByLabel('Password')

        await inputName.fill('Lucas');
        await inputSurname.fill('Caamano');
        await inputUsername.fill('Luffytv');
        await inputEmail.fill('lucasriver55@hotmail.com');
        await inputPassword.fill('contra123');

        await page.getByRole('button').click();

        await expect(inputName).toBeEmpty();
        await expect(inputSurname).toBeEmpty();
        await expect(inputUsername).toBeEmpty();
        await expect(inputEmail).toBeEmpty();
        await expect(inputPassword).toBeEmpty();
        await page.pause();

    })

});
