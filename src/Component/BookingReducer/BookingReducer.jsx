'use client'

import { useState, useReducer } from "react";
import FormField from "../FormField/FormField";


const initialState = {
  booking: {
    name: "",
    postCode: '',
    address: '',
    city: '',
    phoneNumber: '',
    email: ""
  },
  inputError: false
};

function reducer(state, action){

  switch(action.type){
    case "CHANGE_FIELD":
      return {
          booking: {
            ...state.booking,
            [action.payload.fieldName]: action.payload.fieldValue
          },
          inputError: state.inputError
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

  const [inputError, setInputError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault()
    

    setInputError('');

    let inputErrorstr = ''

    for (let key in state.booking) {
      if (state.booking[key].length < 1) {
        inputErrorstr = inputErrorstr + `${key} is required.`;
      }
    }
    setInputError(inputErrorstr);
    console.log(state.booking)
  }


  return (
    <>
      <h1 className="designBooking">Design Booking</h1>
      <section className="formWrapper">
        <form onSubmit={handleSubmit}>
          <fieldset className="formContainer">
            <legend className = "groupTitle">Personal Information:</legend>
            <FormField 
            label="name"
            type ="text"
            name = "name"
            value = {state.booking.name}
            handleChange= {handleChange}
            />
            <FormField 
            label="email"
            type ="text"
            name = "email"
            value = {state.booking.email}
            handleChange= {handleChange}
            />
          </fieldset>
          {inputError && <p style={{ color: 'red' }}>{inputError}</p>}
          <input type="submit" value="Submit" />
        </form>
      </section>
    </>
  )
}