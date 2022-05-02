import Logo from "../assests/logo.png";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { useState } from "react";

const Header = () => {
  const [navShow, setNavShow] = useState(false);
  const navToggleHandler = () => {
    if (navShow === false) {
      setNavShow(true);
    } else {
      setNavShow(false);
    }
    console.log(navShow);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoWrapper}>
        <img src={Logo} alt="company logo" />
        <h1>Personal Trainer Mid</h1>
      </div>
      <button
        className={styles.navToggle}
        aria-label="toggle navigation"
        onClick={navToggleHandler}
      >
        <span>
          <div
            className={
              navShow ? `${styles.bar1} ${styles.bar1Open}` : styles.bar1
            }
          ></div>
          <div
            className={
              navShow ? `${styles.bar1} ${styles.bar2Open}` : styles.bar2
            }
          ></div>
          <div
            className={
              navShow ? `${styles.bar1} ${styles.bar3Open}` : styles.bar3
            }
          ></div>
        </span>
      </button>
      <nav
        className={
          navShow
            ? `${styles.nav} ${styles.navOpen}`
            : `${styles.nav} ${styles.navClosed}`
        }
      >
        <ul className={styles.navList}>
          <li onClick={navToggleHandler}>
            <Link className={styles.navLink} to="/">
              Home
            </Link>
          </li>
          <li onClick={navToggleHandler}>
            <Link className={styles.navLink} to="/about">
              About
            </Link>
          </li>
          <li onClick={navToggleHandler}>
            <Link className={styles.navLink} to="/gallery">
              Gallery
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
