import { useState } from "react";
import cn from "classnames";
import Logo from "../Logo/Logo";
import styles from "./navbar.module.scss";
import Link from "next/link";

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
  const handleMenuOpen = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <header className={styles.header}>
      <Logo />
      <nav className={cn(isMenuOpen ? styles.navbar_active : "", styles.navbar)}>
        <ul className={styles.navbar__list}>
          <li className={styles.navbar__item}>
            <Link href="/" passHref legacyBehavior>
              <a className={styles.navbar__link}>About</a>
            </Link>
          </li>
          <li className={styles.navbar__item}>
            <Link href="/projects" passHref legacyBehavior>
              <a className={styles.navbar__link}>Projects</a>
            </Link>
          </li>
          <li className={styles.navbar__item}>
            <Link href="/blog" passHref legacyBehavior>
              <a className={styles.navbar__link}>Blog</a>
            </Link>
          </li>
        </ul>
      </nav>
      <button
        type="button"
        className={cn(styles.iconMenu, isMenuOpen ? styles.menuOpen : null)}
        onClick={handleMenuOpen}
      >
        <div className={styles.iconBurger}>
          <span></span>
        </div>
      </button>
    </header>
  );
}

export default Navbar;
