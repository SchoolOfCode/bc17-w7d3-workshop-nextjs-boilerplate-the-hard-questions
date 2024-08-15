import Image from "next/image";
import "./page.css";
import HeroText from '../src/Component/HeroText/HeroText.jsx'
import Footer from "@/src/Component/Footer/Footer";

export default function Home() {
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
          <div className ="how-it-works-text">
            <h2>How it works</h2>
            <hr className="solid"/>
          </div>
          <HeroText
            imgSrc = "/how-it-works-1.png"
            title = "Give us a call ..."
            content = 'Call us and book in a "Design Consultation" on a date and time to suit you.'
          />
          <hr/>
          <HeroText
            imgSrc = "/how-it-works-2.png"
            title = "We come to you ..."
            content = 'We come to your home to do an assessment of the space and your style.'
          />
          <hr/>
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