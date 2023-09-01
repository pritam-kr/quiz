import React from "react";
import styles from "./LoginForm.module.scss";
import * as FaIcons from "react-icons/fa";

const LoginForm = ({ input, setInput, loginHandler }) => {
  return (
    <div className={styles.loginForm}>
      <div className={styles.inputField}>
        <h1 className={styles.formTitle}>Welcome to Play Quiz</h1>
        <p className={styles.formDescription}>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content.{" "}
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
  );
};

export default LoginForm;
