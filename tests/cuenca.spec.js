const { test, expect } = require('@playwright/test');

test.beforeEach(async ({page})=> {
    await page.goto('https://sistemacuenca.ucp.edu.ar/alumnosnotas/')
});

test.describe('Testing Form', ()=> {

    test('deberia mostrar mensaje correcto', async ({ page }) => {
        await page.getByRole('textbox', {name:'Usuario'}).fill('43532953')
        await page.getByRole('textbox', {name:'Clave inicial 1234'}).fill('LucasLuffy10')
        await page.getByRole('button').click();
        await page.getByRole('button', {name:'close'}).click()
        await page.locator('div[id= \'ctl00_PanelCursado_header\']').click()
        await page.getByRole('link', {name:'Evaluaciones Parciales'}).click()
        await page.getByText('Economía y Costos - A').click()
        await expect(page.locator('table[id= \'ctl00_ContentPlaceHolder1_GridView2\']')).toBeVisible()
        await page.pause();
    });

});