import React from "react";  
import FounderCard from "@/src/Component/FounderCard/FounderCard";
import './page.css'

export default function Founders() {

  return(
    <div className  = "foundersPageWrapper">
      <section className = "founderHero">
        <h2>Meet the artisans behind our masterpieces!</h2>
        <h2>Mike and Mandy</h2>
        <img className = "hero1" src = "/assests Founders/founder-mike-and-mandy.png"></img>
      </section>
      <FounderCard
        imgSrc = "/assests Founders/founders-1.png"
        title = "Our craftmanship"
        content = 'Mike and Mandy studied and honed their craft under the fireplace sensei Vik Von Blaze.'
      />
      <FounderCard
        imgSrc = "/assests Founders/founders-2.png"
        title = "Our experience"
        content = "Numbers don't lie - we've been aroundor 20+ years and have a long list of happy customers who gladly recommend us."
      />
      <FounderCard
        imgSrc = "/assests Founders/founders-3.png"
        title = "Our guarantee"
        content = "If you're not 100% satisfied we will fully refund your purchase. Also, we offer free repairs for the first 20 years of ownership. Find that somewhere else!"
      />
    </div>
  )
}