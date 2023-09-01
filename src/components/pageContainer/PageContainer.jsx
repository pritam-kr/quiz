import React from "react";
import styles from "./PageContainer.module.scss";

const PageContainer = ({ children, className }) => {
  return (
    <div className={!className ? styles.pageContainer : ""}>{children}</div>
  );
};

export default PageContainer;
