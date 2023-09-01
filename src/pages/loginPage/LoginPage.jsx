import React from "react";
import styles from "./LoginPage.module.scss";
import * as FaIcons from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginForm } from "../../components";

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
        <LoginForm
          input={input}
          setInput={setInput}
          loginHandler={loginHandler}
        />
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
