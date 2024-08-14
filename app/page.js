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
                    <p>
                     <h2>Discover the Perfect Fireplace</h2>
                    </p>
                    <p> 
                      <h3>Book consultation: <span className = "white-text">0121 345 6789</span></h3>
                    </p>
                </div>
            </section>
            <div className ="how-it-works-text">
                <p><h2>How it works</h2></p>
                <hr className="solid"/>
            </div>
            <HeroText
                imgSrc = "/how-it-works-1.png"
                title = "Give us a call ..."
                content = 'Call us and book in a "Design Consultation" on a date and time to suit you.'
            />
            <section className = "heroText">
                <img className = "other-heroes" src = "/how-it-works-2.png"/>
                <p><h3>We come to you ...</h3></p>
                <p className = "heroContent">Call us and book in a "Design Consultation" on a date and time to suit you.</p>
                <hr className="solid"/>
            </section>
            <section className = "heroText">
                <img className = "other-heroes" src = "/how-it-works-3.png"/>
                <p><h3>We recommend ...</h3></p>
                <p className = "heroContent">Call us and book in a "Design Consultation" on a date and time to suit you.</p>
            </section>
        </div>    
        </main>
     </div>
  );
}