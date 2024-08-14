import './HeroText.css'

export default function HeroText( props ) {
  return(
  <>
      <section className = "heroText">
          <img className = "other-heroes" src = { props.imgSrc }/>
          <p><h3>{ props.title }</h3></p>
          <p className = "heroContent">{ props.content }</p>
      </section>
  </>
  )
}
