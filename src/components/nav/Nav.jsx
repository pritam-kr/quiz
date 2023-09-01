import React from "react";
import styles from "./Nav.module.scss";
import * as FaIcons from "react-icons/fa";

const Nav = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <FaIcons.FaPlayCircle className={styles.navIcons} />
          <h1 className={`${styles.navHeading} ${styles.siteTitle}`}>Play Quiz</h1>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.userInfo}>
          <FaIcons.FaUserCircle className={styles.navIcons} />
          <h1 className={styles.navHeading}>Pritam Kumar</h1>
        </div>
      </div>
    </div>
  );
};

export default Nav;
