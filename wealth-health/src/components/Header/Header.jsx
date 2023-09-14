/* react */
import React from 'react';
import { Link } from 'react-router-dom';
/* logo */
import logo from "../../assets/logo.webp";
/* css  */
import styles from  "../Header/Header.module.css"
/**
 * React component to create a header
 * @returns { React.ReactElement } Header component
 */
function Header() {
  return (
    <header className={styles.header}>
    <Link className={styles.headerLink} to="/">
       <img className={styles.headerLogo} src={logo} alt="Wealth Health Logo" />
       <h1 className={styles.headerText}>Wealth Health</h1>
    </Link>
    <p className={styles.title}>HRnet</p>
    <nav className={styles.nav}>
       <Link className={styles.navItem} to="/list">
          <p className={styles.navItemText}>View Current Employees</p>
       </Link>
    </nav>
 </header>
  )
}
export default Header