'use client'

import React from "react";
import './page.css'
import { useState } from "react";

export default function Booking() {

  const [booking, setBooking] = useState({
    name: '',
    postCode: '',
    address: '',
    city: '',
    phoneNumber: '',
    email: ''
  })
  const handleChange = (event) => {
    const { name, value } = event.target
    setBooking((oldBooking) => ({ ...oldBooking, [name]: value }))
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(booking)
  }


  return (
    <>
      <h1>Design Booking</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Personalia:</legend>
          <ul>
            <li>
              <label htmlFor="name">Full name:</label>
              <input type="text" id="name" name="name" value={booking.name} onChange={handleChange} />
            </li>
            <li>
              <label htmlFor="postCode">Postcode:</label>
              <input type="text" id="postCode" name="postCode" value={booking.postCode} onChange={handleChange} />
            </li>
            <li>
              <label htmlFor="address">Address:</label>
              <input type="text" id="address" name="address" value={booking.address} onChange={handleChange} />
            </li>
            <li>
              <label htmlFor="city">City:</label>
              <input type="text" id="city" name="city" value={booking.city} onChange={handleChange} />
            </li>
          </ul>
        </fieldset>
        <fieldset>
          <legend>Personalia:</legend>
          <ul>
            <li>
              <label htmlFor="phoneNumber">Phone number:</label>
              <input type="text" id="phoneNumber" name="phoneNumber" value={booking.phoneNumber} onChange={handleChange} />
            </li>
            <li>
              <label htmlFor="email">Email address:</label>
              <input type="text" id="email" name="email" value={booking.email} onChange={handleChange} />
            </li>
          </ul>
        </fieldset>
        <input type="submit" value="Submit" />
      </form>
    </>
  )
}