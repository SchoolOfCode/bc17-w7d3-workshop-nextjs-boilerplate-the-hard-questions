import React from "react"; 
import styles from './Reviews.module.css'
import { useState, useEffect } from "react";


export default function Reviews () {

  const[selectedCountry, setSelectedCountry] = useState(null);
  const[ countryData, setCountryData ] = useState(null);

  useEffect(() => {
    if (selectedCountry) {
      fetch(`https://seal-app-336e8.ondigitalocean.app/reviews?country=${selectedCountry}`)
        .then(response => response.json())
        .then(data => setCountryData(data))
    }
  }, [selectedCountry])

  function inputCountry(country){
    if(country === selectedCountry){
      setSelectedCountry(null);
      setCountryData(null);
    } else {
    setSelectedCountry(country);
  }

    
  }

  return (
<section className = {styles.reviews}>
      <h2 className = "how-it-works-text">Trusted.</h2>
      <hr className="solid"/>
      <p>We've got thousands of happy customers all over the UK. Choose your country to see the latest review:</p>
      <div className = {styles.buttonContainer}>
{/* // if select country is england then its active, active is a class and css can be used on it  */}
        <button className={`countryButton ${ selectedCountry === "England" ? styles.active : " "}`} onClick={()=>inputCountry("England")}>England</button>
        <button className={`countryButton ${ selectedCountry === "Wales" ? styles.active : " "}`} onClick={()=>inputCountry("Wales")}>Wales</button>
        <button className={`countryButton ${ selectedCountry === "Scotland" ? styles.active : " "}`} onClick={()=>inputCountry("Scotland")}>Scotland</button>
      </div>
      {countryData  && ( <div>
        <div className = {styles.reviewsContainer}>
          <p>{countryData.text}</p>
        </div>
        <p className = "reviewerText">{countryData.author} - {countryData.location}</p>
      </div>)}
    </section>

  )
}