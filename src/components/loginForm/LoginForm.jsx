import React from "react";
import styles from "./LoginForm.module.scss";
import * as FaIcons from "react-icons/fa";

const LoginForm = ({ input, setInput, loginHandler, error, setError }) => {
  return (
    <div className={styles.loginForm}>
      <div className={styles.inputField}>
        <h1 className={styles.formTitle}>Welcome to Play Quiz</h1>
        <p className={styles.formDescription}>
          It's an app where you can play lots of fun quizzes. It doesn't matter
          if you're a quiz pro or just looking to have some fun.{" "}
        </p>
      </div>
      <p className={styles.error}>{error}</p>
      <div className={styles.inputField}>
        <input
          className={styles.input}
          placeholder="Enter your full name"
          onChange={(e) =>
            setInput((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      </div>
      <div className={styles.inputField}>
        <input
          className={styles.input}
          placeholder="Enter your email"
          type="email"
          required
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
