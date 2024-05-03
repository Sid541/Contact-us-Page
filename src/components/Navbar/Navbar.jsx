import React from 'react'
import styles from "./Navbar.module.css"
function Navbar() {
  return (
    <nav>
      <ul className={styles.navbar}>
        <li className={styles.li}>Home</li>
        <li className={styles.contact} >Contact</li>
        <li className={styles.li}>About Us</li>
      </ul>
      </nav>
  )
}

export default Navbar
