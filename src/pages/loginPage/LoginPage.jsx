import React from "react";
import styles from "./LoginPage.module.scss";
import * as FaIcons from "react-icons/fa";

const LoginPage = () => {
  return (
    <div className={styles.loginPage}>
      <div className={styles.left}></div>
      <div className={styles.right}>
        <div className={styles.loginForm}>
          <div className={styles.inputField}>
            <h1 className={styles.formTitle}>Welcome to Play Quiz</h1>
            <p className={styles.formDescription}>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content.{" "}
            </p>
          </div>

          <div className={styles.inputField}>
            <input className={styles.input} placeholder="enter your name" />
          </div>
          <div className={styles.inputField}>
            <input className={styles.input} placeholder="enter your email" />
          </div>

          <div className={styles.inputField}>
            <div className={styles.formFooter}>
              <button className={styles.button}>
                {" "}
                <FaIcons.FaUserCircle className={styles.loginUser} />{" "}
                <span>Login</span>
              </button>
            </div>
          </div>
        </div>

        <div className={styles.footer}>
            <FaIcons.FaGithub className={styles.socialIcons} />
            <FaIcons.FaLinkedin className={styles.socialIcons} />
            <FaIcons.FaTwitter className={styles.socialIcons} />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
