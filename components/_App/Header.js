import { useState } from "react";


import NavLinks from "./NavLinks";
import Backdrop from "./Backdrop";
import SideDrawer from "./SideDrawer";
import Link from "next/link";

import styles from "./Header.module.css";

function Header({user}) {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  
  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };

 

  return (
    <>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
      {drawerIsOpen && (
        <SideDrawer onClick={closeDrawerHandler}>
          <nav className={styles["main-navigation__drawer-nav"]}>
            <NavLinks />
          </nav>
        </SideDrawer>
      )}

      <header className={styles["main-header"]}>
        <Link href="/">
          <div className={styles.logo}>Eton Auctions</div>
        </Link>

        <button
          onClick={openDrawerHandler}
          className={styles["main-navigation__menu-btn"]}
        >
          <img src="/assets/hamburger-menu-svgrepo-com.svg" />
        </button>

        <nav className={styles["main-navigation__header-nav"]}>
          <NavLinks />
        </nav>
      </header>
    </>
  );
}

export default Header;
