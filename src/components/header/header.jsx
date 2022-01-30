import React, { useState } from "react";
import styles from "./header.module.scss";

function Header() {
  const [menuState, setMenuState] = useState(true);

  const handleResize = () => {
    if (window.innerWidth > 767) {
      setMenuState(true);
      window.removeEventListener("resize", handleResize);
      console.log('up')
    }
  }

  window.addEventListener("resize", handleResize);
  
  return (
    <header className={styles.header}>
      <p>Хэдер</p>
    </header>
  );
}

export default Header;
