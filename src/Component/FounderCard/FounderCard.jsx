import './FounderCard.css'

export default function FounderCard( props ) {
  return(
  <>
      <section className = "heroText">         
          <h2>{ props.title }</h2>
          <p className = "heroContent">{ props.content }</p>
          <img className = "other-heroes" src = { props.imgSrc }/>
      </section>
  </>
  )
}
