import React from "react";  
import './page.css'

export default function Booking() {
  return(
    <>
      <h1>Design Booking</h1>
      <form action="/action_page.php">
        <fieldset>
          <legend>Personalia:</legend>
          <ul>
            <li>
              <label for="name">Full name:</label>
              <input type="text" id="name" name="name"/>
            </li>
            <li>
              <label for="postCode">Postcode:</label>
              <input type="text" id="postCode" name="postCode"/>
            </li>
            <li>
              <label for="address">Address:</label>
              <input type="text" id="address" name="address"/>
            </li>
            <li>
              <label for="city">City:</label>
              <input type="text" id="city" name="city"/>
            </li>
          </ul>
        </fieldset>
        <fieldset>
          <legend>Personalia:</legend>
          <ul>
            <li>
              <label for="phoneNumber">Phone number:</label>
              <input type="text" id="phoneNumber" name="phoneNumber"/>
            </li>
            <li>
              <label for="email">Email address:</label>
              <input type="text" id="email" name="email"/>
            </li>
          </ul>
        </fieldset>
        <input type="submit" value="Submit"/>
      </form>
    </>
  )
}