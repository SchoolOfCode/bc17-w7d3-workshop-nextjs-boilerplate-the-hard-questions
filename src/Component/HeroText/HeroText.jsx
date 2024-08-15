import './HeroText.css'

export default function HeroText( props ) {
  return(
  <>
      <section className = "heroText">
          <img className = "other-heroes" src = { props.imgSrc }/>
          <h3>{ props.title }</h3>
          <p className = "heroContent">{ props.content }</p>
      </section>
  </>
  )
}
