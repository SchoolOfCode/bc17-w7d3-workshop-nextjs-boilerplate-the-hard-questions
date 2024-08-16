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
      <h1>🔥{ props.title }</h1>
      <div className={styles.menuContainer}>
        <button className={styles.menuButton} onClick={toggleDropdown}>
          <Image
            src = '/assests Founders/menu-open-button.png'
            width={30}
            height={30}
          />
        </button>
      {isDropdownVisible && <DropDownMenu propFunction={toggleDropdown} />}
      </div>
   </header>
  )
}