import React from "react";
import styles from "./LoginPage.module.scss";
import * as FaIcons from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [input, setInput] = useState({ name: "", email: "" });
  const navigate = useNavigate();

  const loginHandler = () => {
    if (input.name && input.email) {
      localStorage.setItem("userinfo", JSON.stringify(input));
      navigate("/home");
    }
  };

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
            <input
              className={styles.input}
              placeholder="enter your name"
              onChange={(e) =>
                setInput((prev) => ({ ...prev, name: e.target.value }))
              }
            />
          </div>
          <div className={styles.inputField}>
            <input
              className={styles.input}
              placeholder="enter your email"
              type="email"
              onChange={(e) =>
                setInput((prev) => ({ ...prev, email: e.target.value }))
              }
            />
          </div>

          <div className={styles.inputField}>
            <div className={styles.formFooter}>
              <button className={styles.button} onClick={loginHandler}>
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
