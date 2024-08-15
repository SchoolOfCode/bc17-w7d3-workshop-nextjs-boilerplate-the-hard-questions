'use client'

import Image from "next/image";
import styles from "./Header.module.css";
import { useState } from 'react';
import DropDownMenu from "../DropDown/DropDown";

export default function Header(props) {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  function toggleDropdown() {
    setIsDropdownVisible(!isDropdownVisible);
  

  }
  return (
    <header className={styles.header}>
    <li className={styles.menuContainer}>
      <button className={styles.menuButton} onClick={toggleDropdown}>
        <Image
          src = {isDropdownVisible ? '/assests Founders/menu-close-button.png' : '/assests Founders/menu-open-button.png'}
          width={30}
          height={30}
        />
      </button>
      {isDropdownVisible && <DropDownMenu />}
    </li>
    <h1>🔥{ props.title }</h1>
   </header>
  )
}