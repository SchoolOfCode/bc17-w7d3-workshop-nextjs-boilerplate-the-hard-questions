import {test, expect} from '@playwright/test';
test('Menu button',async({page})=> {
  await page.goto('http://localhost:3000/');
  await page.getByTestId('menu-button').click();
  await expect(page.getByTestId('menu')).toBeVisible();
  await page.getByText('Book Consultation').first().click();
  await expect(page.getByTestId('menu')).toBeHidden();
  await expect(page).toHaveURL(/.*booking/);
});

test('Form' ,async({page})=> {
  await page.goto('http://localhost:3000/booking');
  await page.getByLabel('Name').fill('tom');
  await page.getByLabel('Postcode').fill('se19');
  await page.getByLabel('Address').first().fill('home');
  await page.getByText('Request Design Consultation').click();
  await expect(page.getByText('All fields need to be filled in')).toBeVisible();
});

test('Form Success' ,async({page})=> {
  await page.goto('http://localhost:3000/booking');
  await page.getByLabel('Name').fill('tom');
  await page.getByLabel('Postcode').fill('se19');
  await page.getByLabel('Address').first().fill('home');
  await page.getByLabel('City').first().fill('home');
  await page.getByLabel('Phone number').first().fill('home');
  await page.getByLabel('Email address').fill('home');
  await page.getByText('Request Design Consultation').click();
  await expect(page.getByText('Loading')).toBeVisible();
  await expect(page.getByText('Submitted')).toBeVisible();
});

test('Founders' ,async({page})=> {
  await page.goto('http://localhost:3000/founders');
});

/*
As a CUSTOMER I want to book a consultation.
I want the page to load when I go to the website. ✅
I want the menu button to be clickable and for it to show the menu. ✅
I want to be able to navigate to the consultation page and for the menu to close and the correct URL to show.✅
I want to be able to input the information into the form fields.✅
I want to be informed if there is a problem with the form.✅
I want to see the status and confirmation of form submission.
*/