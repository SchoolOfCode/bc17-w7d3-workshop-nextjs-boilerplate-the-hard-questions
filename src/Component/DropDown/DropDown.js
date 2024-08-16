import Link from "next/link";
import styles from './DropDown.module.css'
import Image from "next/image";

export default function DropDownMenu({propFunction}) {

  return (
    <div className = {styles.menuBox}>
      <ul>
        <button className={styles.menuButton} onClick={propFunction}>
          <Image
            src = '/assests Founders/menu-close-button.png'
            width={30}
            height={30}
          />
        </button>
        <li className = {styles.menuText}> <Link href="/">Home</Link></li>
        <li className = {styles.menuText}> <Link href="/founders">Meet the Founders</Link></li>
      </ul>
    </div>
  );
}
