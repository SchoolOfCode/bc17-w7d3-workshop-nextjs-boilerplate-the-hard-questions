'use client'

import { useState, useReducer } from "react";
import FormField from "../FormField/FormField";
import styles from './BookingReducer.module.css'
import { StyleRegistry } from "styled-jsx";


const initialState = {
  booking: {
    name: "",
    postCode: '',
    address: '',
    city: '',
    phoneNumber: '',
    email: ""
  },
  inputError: [],
  formLoading: false,
  formSubmitted: false
};

function reducer(state, action){

  switch(action.type){
    case "SUBMITTING":
      return {
        ...state,
        formLoading: true
      }
    case "FORM_SUBMITTED":
      return {
        ...state,
        formSubmitted: true,
        formLoading: false
      }
    case "CHANGE_FIELD":
      return {
          booking: {
            ...state.booking,
            [action.payload.fieldName]: action.payload.fieldValue
          },
          inputError: state.inputError,
          formLoading: state.formLoading
      }
    case "SET_ERROR":
      return {
        ...state,
        [action.payload.fieldName]: action.payload.fieldValue
      }
    default:
      return state;
  }

}

export default function BookingReducer() {

  const [state, dispatch] = useReducer(reducer, initialState)
    

  const handleChange = (event) => {
    const { name, value } = event.target
    dispatch({
      type: "CHANGE_FIELD",
      payload: {
        fieldName: name,
        fieldValue: value
      }
    })

  }

  const handleSubmit = (event) => {
    event.preventDefault()
  
    // setInputError('');

    let inputErrorarr = []

    for (let key in state.booking) {
      if (state.booking[key].length < 1) {
        inputErrorarr.push(key);
      }
    }
    // setInputError(inputErrorstr);
    if (inputErrorarr) {
      dispatch({
        type: "SET_ERROR",
        payload: {
          fieldName: "inputError",
          fieldValue: inputErrorarr
        }
      })
    }
  
    
    else {
        console.log(state.booking)
        dispatch({
        type: "SUBMITTING"

      })
      setTimeout(() => {
        dispatch({
          type: "FORM_SUBMITTED"
        });
      }, 2000);}
  }


  return (
    <>
      <h1 className="designBooking">Design Booking</h1>
      {state.formSubmitted ? "Submitted" : state.formLoading ? "Loading" : <section className="formWrapper">
        <form onSubmit={handleSubmit}>
          <fieldset className={styles.formContainer}>
            <legend className = "groupTitle">Personal Information:</legend>
            <FormField 
              label="Name"
              type ="text"
              name = "name"
              value = {state.booking.name}
              handleChange= {handleChange}
              hasError = {state.inputError.includes("name")}
            />
            <FormField 
              label="Postcode"
              type ="text"
              name = "postCode"
              value = {state.booking.postCode}
              handleChange= {handleChange}
              hasError = {state.inputError.includes("postCode")}
            />
            <FormField 
              label="Address"
              type ="text"
              name = "address"
              value = {state.booking.address}
              handleChange= {handleChange}
              hasError = {state.inputError.includes("address")}
            />
            <FormField 
              label="City"
              type ="text"
              name = "city"
              value = {state.booking.city}
              handleChange= {handleChange}
              hasError = {state.inputError.includes("city")}
            />
          </fieldset>
          <fieldset className={styles.formContainer}>
            <legend className = "groupTitle">Contact Information:</legend>
            <FormField 
              label="Phone number"
              type ="text"
              name = "phoneNumber"
              value = {state.booking.phoneNumber}
              handleChange= {handleChange}
              hasError = {state.inputError.includes("phoneNumber")}
            />
            <FormField 
              label="Email address"
              type ="text"
              name = "email"
              value = {state.booking.email}
              handleChange= {handleChange}
              hasError = {state.inputError.includes("email")}
            />
          </fieldset>
          {state.inputError.length > 0 && <p style={{ color: 'red' }}>All fields need to be filled in</p>}
          <div className={styles.buttonWrapper}>
            <input className={styles.submitButton} type="submit" value="Request Design Consultation" />
          </div>
        </form>
      </section>}
    </>
  )
}