import styles from './Footer.module.css'

export default function Footer() {
  return ( 
    <footer>
  <section className = {styles.footerInfo}>
    <div>
        <p>Find us on:</p>
    </div>
    <ul className = {styles.metaDataList}>
        <li>
            Facebook
        </li>
        <li>
            Instagram
        </li>
        <li>
            Tiktok
        </li>
    </ul>
    <div>
        <p>©️ Fireplace Palace</p>
    </div>
    <div>
        <p>Info@fireplace.co.uk</p>
    </div>
</section>
</footer>    

  )
}