import { Link, useLocation } from "react-router";
import moonIconUrl from "../../assets/icons/moon-waning-crescent.svg";
import sunIconUrl from "../../assets/icons/white-balance-sunny.svg";
import cartIconUrl from "../../assets/icons/cart.svg";
import menuIconUrl from "../../assets/icons/menu.svg";
import styles from "./Navbar.module.css";
import { useState } from "react";
import useTheme from "./hooks/useTheme";

export default function Navbar() {
  const [theme, setTheme] = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  function onClick() {
    setTheme((previous) => {
      return previous === "dark" ? "light" : "dark";
    });
  }

  function toggleMenu() {
    setIsMenuOpen((previousIsOpen) => {
      return previousIsOpen ? false : true;
    });
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <a href="/" className={styles.logo}>
          <span>the</span> EDIT
        </a>
        <ul
          className={
            isMenuOpen
              ? ` ${styles.navigationList} ${styles.active}`
              : styles.navigationList
          }
        >
          <li>
            <Link
              to="/"
              className={
                location.pathname === "/"
                  ? `${styles.link} ${styles.active}`
                  : styles.link
              }
              onClick={() => {
                isMenuOpen && toggleMenu();
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/shop"
              className={
                location.pathname === "/shop"
                  ? `${styles.link} ${styles.active}`
                  : styles.link
              }
              onClick={() => {
                isMenuOpen && toggleMenu();
              }}
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              className={
                location.pathname === "/cart"
                  ? `${styles.link} ${styles.active}`
                  : styles.link
              }
              onClick={() => {
                isMenuOpen && toggleMenu();
              }}
            >
              <img src={cartIconUrl} alt="" />
              Cart
            </Link>
          </li>
        </ul>
        <button className={styles.toggleThemeBtn} onClick={onClick}>
          {theme === "light" ? (
            <img src={moonIconUrl} alt="activate dark theme" />
          ) : (
            <img src={sunIconUrl} alt="activate light theme" />
          )}
        </button>
        <button className={styles.menuBtn} onClick={toggleMenu}>
          <img src={menuIconUrl} alt="toggle menu" />
        </button>
      </div>
    </nav>
  );
}
