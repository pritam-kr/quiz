import React from "react";
import styles from "./NotFound.module.scss";
import { useNavigate } from "react-router";

const NotFound = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("userinfo"));

  return (
    <div className={styles.notFound}>
      {user?.name && user?.email ? (
        <div>
          <h1>404</h1>
          <h2>Page not Found</h2>
          <button onClick={() => navigate("/home")}>Go back to Home</button>
        </div>
      ) : (
        <div>
          <h1>404</h1>
          <h2>Unknown user found</h2>
          <button onClick={() => navigate("/")}>Go back to login</button>
        </div>
      )}
    </div>
  );
};

export default NotFound;
