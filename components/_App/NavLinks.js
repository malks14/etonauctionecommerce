import React, {Fragment} from "react";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import { Icon } from "semantic-ui-react";
import { handleLogout } from "../../utils/auth";
import styles from "./NavLinks.module.css";
import nProgress from "nprogress";

Router.onRouteChangeStart = () => nProgress.start();
Router.onRouteChangeComplete = () => nProgress.done();
Router.onRouteChangeError = () => nProgress.done();

const NavLinks = ({ user }) => {
    const router = useRouter();
    const isRoot = user && user.role === "root";
    const isAdmin = user && user.role === "admin";
    const isRootOrAdmin = isRoot || isAdmin;
    function isActive(route) {
        return route === router.pathname;
      }
  return (
    <>
      <ul className={styles["nav-links"]}>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/fine-arts">Fine Arts</Link>
        </li>
        <li>
          <Link href="/antiques">Antiques</Link>
        </li>
        <li>
          <Link href="/nfts">NFT's</Link>
        </li>
        {isRootOrAdmin && (
        <a href="/create">
          <div header active={isActive("/create")}>
            <Icon name="add square" size="large" />
            Create
          </div>
        </a>
      )}
      {user && (
        <Fragment>
          <Link href="/account">
            <div className={styles.accountCtn} header active={isActive("/account")}>
              <Icon name="user" size="large" />
              Account
            </div>
          </Link>

          <div className={styles.signoutCtn} onClick={handleLogout} header>
            <Icon name="sign out" size="large" />
            Logout
          </div>
        </Fragment>
      )}
      {!user &&
        <Fragment>
          <Link href="/login">
            <div className={styles.loginCtn} header active={isActive("/login")}>
              <Icon name="sign in" size="large" />
              Login
            </div>
          </Link>
        </Fragment>
  }
      <div className={styles.cartCtn}>
        <Link href={user ? "/cart" : "/login"}>
          <a>
            <Icon name="cart" size="large" />
            <span className={styles.cartBubble}/>
          </a>
        </Link>
      </div>
      </ul>
    </>
  );
};

export default NavLinks;
