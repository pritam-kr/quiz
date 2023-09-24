import React from "react";
import styles from "./Nav.module.scss";
import * as FaIcons from "react-icons/fa";
import Timer from "../timer/Timer";
import { useLocation } from "react-router";
import { useSelector } from "react-redux";

const Nav = ({ timerId, setTimerId }) => {
  const user = JSON.parse(localStorage.getItem("userinfo"));

  const { pathname } = useLocation();

  const {
    questionList: { data, isError, isLoading },
  } = useSelector((state) => state.questionReducer);

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
        {data?.length > 0 &&
          pathname !== "/report" &&
          pathname !== "/login" &&
          pathname !== "/home" &&
          pathname !== "/" &&
          (isLoading ? (
            "load"
          ) :  null)}
        <div className={styles.userInfo}>
          <FaIcons.FaUserCircle className={styles.navIcons} />
          <h1 className={styles.navHeading}>{user?.name ?? "Unknown user"}</h1>
        </div>
      </div>
    </div>
  );
};

export default Nav;
