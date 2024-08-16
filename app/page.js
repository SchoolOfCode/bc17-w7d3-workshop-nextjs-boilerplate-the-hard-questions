'use client'

import Image from "next/image";
import "./page.css";
import HeroText from '../src/Component/HeroText/HeroText.jsx'
import Footer from "@/src/Component/Footer/Footer";
import { useState, useEffect } from "react";
export default function Home() {

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
    setSelectedCountry(country);
  }

  return(
    <div className = "pageWrapper">
      <main>
        <div className ="hero">
          <section className = "discoverHero" >
            <img className="hero1" src="hero-desktop.png" alt="fireplace"/>
            <div className = "discoverTextContainter"> 
              <h2>Discover the Perfect Fireplace</h2>
              <h3>Book consultation: <span className = "white-text">0121 345 6789</span></h3>
            </div>
          </section>
          <div>
            <section className = "reviews">
              <h2 className = "how-it-works-text">Trusted.</h2>
              <hr className="solid"/>
              <p>We've got thousands of happy customers all over the UK. Choose your country to see the latest review:</p>
              <div className = "buttonContainer">
 {/* // if select country is england then its active, active is a class and css can be used on it  */}
                <button className={`countryButton ${ selectedCountry === "England" ? "active" : " "}`} onClick={()=>inputCountry("England")}>England</button>
                <button className={`countryButton ${ selectedCountry === "Wales" ? "active" : " "}`} onClick={()=>inputCountry("Wales")}>Wales</button>
                <button className={`countryButton ${ selectedCountry === "Scotland" ? "active" : " "}`} onClick={()=>inputCountry("Scotland")}>Scotland</button>
              </div>
              {countryData && ( <div>
                <div className = "reviewsContainer">
                  <p>{countryData.text}</p>
                </div>
                <p className = "reviewerText">{countryData.author} - {countryData.location}</p>
              </div>)}
            </section>
          </div>
          <div className ="how-it-works-text">
            <h2>How it works</h2>
          </div>
          <hr className="solid"/>
          <HeroText
            imgSrc = "/how-it-works-1.png"
            title = "Give us a call ..."
            content = 'Call us and book in a "Design Consultation" on a date and time to suit you.'
          />
          <hr className="solid"/>
          <HeroText
            imgSrc = "/how-it-works-2.png"
            title = "We come to you ..."
            content = 'We come to your home to do an assessment of the space and your style.'
          />
          <hr className="solid"/>
          <HeroText
            imgSrc = "/how-it-works-3.png"
            title = "We recommend..."
            content = 'We send you a bespoke set of fireplace recommendations.'
          />
        </div>    
      </main>
    </div>
  );
}