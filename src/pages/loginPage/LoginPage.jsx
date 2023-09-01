import React from "react";
import styles from "./LoginPage.module.scss";
import * as FaIcons from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginForm } from "../../components";

const LoginPage = () => {
  const [input, setInput] = useState({ name: "", email: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const loginHandler = () => {
    if (input.name.trim() && input.email.trim()) {
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

      if (emailRegex.test(input.email.trim())) {
        localStorage.setItem("userinfo", JSON.stringify(input));
        navigate("/home");
        setError("")
      } else {
        setError("Enter a valid email");
      }
    } else if (!input.name.trim()) {
      setError("Name field can't be empty");
    } else if (!input.email.trim()) {
      setError("Email field can't be empty");
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
          error={error}
          setError={setError}
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
