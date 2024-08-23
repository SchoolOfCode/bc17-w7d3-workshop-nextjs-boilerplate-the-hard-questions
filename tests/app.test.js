import {test, expect} from '@playwright/test';
test('Page loading',async({page})=> {
  await page.goto('http://localhost:3000/');
});

test('Menu button',async({page})=> {
  await page.goto('http://localhost:3000/');
  await page.getByTestId('menu-button').click();
  await expect(page.getByTestId('menu')).toBeVisible();
  await page.getByText('Book Consultation').first().click();
});


/*
As a CUSTOMER I want to book a consultation.
I want the page to load when I go to the website. ✅
I want the menu button to be clickable and for it to show the menu. ✅
I want to be able to navigate to the consultation page and for the menu to close.
I want to be able to input the information into the form fields.
I want to be informed if there is a problem with the form.
I want to see the status and confirmation of form submission.
*/