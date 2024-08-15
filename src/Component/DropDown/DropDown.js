import Link from "next/link";
import styles from './DropDown.module.css'


export default function DropDownMenu() {

  return (
    <div className = {styles.menuBox}>
      <ul>
        <li className = {styles.menuText}> <Link href="/">Home</Link></li>
        <li className = {styles.menuText}> <Link href="/founders">Meet the Founders</Link></li>
      </ul>
    </div>
  );
}
