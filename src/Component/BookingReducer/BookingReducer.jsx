'use client'

import { useState, useReducer } from "react";


const initialState = {
  booking: {
    name: "",
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

    for (let key in booking) {
      if (booking[key].length < 1) {
        inputErrorstr = inputErrorstr + `${key} is required.`;
      }
    }
    setInputError(inputErrorstr);
    console.log(booking)
  }


  return (
    <>
      <h1 className="designBooking">Design Booking</h1>
      <section className="formWrapper">
        <form onSubmit={handleSubmit}>
          <fieldset className="formContainer">
            <legend className = "groupTitle">Personal Information:</legend>
            <ul>
              <li>
                <label htmlFor="name">Full name:</label>
              </li>
              <li>
                <input type="text" id="name" name="name" value={state.booking.name} onChange={handleChange} /> 
              </li>
            </ul>
          </fieldset>
          {inputError && <p style={{ color: 'red' }}>{inputError}</p>}
          <input type="submit" value="Submit" />
        </form>
      </section>
    </>
  )
}