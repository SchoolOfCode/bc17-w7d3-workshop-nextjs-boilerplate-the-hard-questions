'use client'

import Image from "next/image";
import styles from "./Header.module.css";
import { useState } from 'react';

export default function Header(props) {
  const [ menuState, setMenuState ] = useState(false);
  function onHandleClick() {
    setMenuState(!menuState);
    console.log(menuState);
  }
  return (
    <header>
    <h1>🔥{ props.title }</h1>
    <button onClick={onHandleClick}>
      <Image
        src = '/assests Founders/menu-open-button.png'
        width={30}
        height={30}
      />
    </button>
   </header>
  )
}