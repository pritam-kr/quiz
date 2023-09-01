import React from "react";
import styles from "./Nav.module.scss";
import * as FaIcons from "react-icons/fa";

const Nav = () => {
  const user = JSON.parse(localStorage.getItem("userinfo"));
 

  return (
    <div className={styles.nav}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <FaIcons.FaPlayCircle className={styles.navIcons} />
          <h1 className={`${styles.navHeading} ${styles.siteTitle}`}>
          Quizify
          </h1>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.userInfo}>
          <FaIcons.FaUserCircle className={styles.navIcons} />
          <h1 className={styles.navHeading}>{user?.name ?? "Unknown user"}</h1>
        </div>
      </div>
    </div>
  );
};

export default Nav;
