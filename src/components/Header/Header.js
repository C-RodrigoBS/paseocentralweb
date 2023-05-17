import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import classNames from "classnames";
import LineIcon from "react-lineicons";


export const Header = () => {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }
  
  return (
    <>
      <div className={styles.contenedorPrincipal__navbar}>
        <nav className={styles.navbar}>
          <a href="#" className={classNames(styles.logo, styles.navbar__a)}>PASEO CENTRAL</a>
          <ul className={styles.links__nav}>
            <li className={styles.navbar__li}><a href="#" className={styles.navbar__a}>Home</a></li>
            <li className={styles.navbar__li}><a href="#" className={styles.navbar__a}>Patio de comidas</a></li>
            <li className={styles.navbar__li}><a href="#" className={styles.navbar__a}>Cine</a></li>
            <li className={styles.navbar__li}><a href="#" className={styles.navbar__a}>Conciertos</a></li>
            <li className={styles.navbar__li}><a href="#" className={styles.navbar__a}>Promociones</a></li>
          </ul>
          <a href="#" className={styles.action__btn}>Ingresar</a>
          <div className={styles.toggle_btn} onClick={toggleMenu}>
            <i className={isOpen ? 'lni lni-close' : 'lni lni-menu'}></i>
          </div>

          <div className={`${styles.dropdown_menu} ${isOpen ? styles.open : ''}`}>
            <li className={styles.navbar__li}><a href="#" className={styles.navbar__a}>Home</a></li>
            <li className={styles.navbar__li}><a href="#" className={styles.navbar__a}>Patio de comidas</a></li>
            <li className={styles.navbar__li}><a href="#" className={styles.navbar__a}>Cine</a></li>
            <li className={styles.navbar__li}><a href="#" className={styles.navbar__a}>Conciertos</a></li>
            <li className={styles.navbar__li}><a href="#" className={styles.navbar__a}>Promociones</a></li>
            <li><a href="#" className={styles.action__btn}>Ingresar</a></li>
          </div>

        </nav>
        <header className={styles.contenedor__header}>

        </header>
      </div>


    </>
  );
};
export default Header;