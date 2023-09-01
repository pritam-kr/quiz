import React from "react";
import styles from "./QuestionPage.module.scss";
import { useParams } from "react-router";

const QuestionPage = () => {
  const { Id, category } = useParams();



  return (
    <div className={styles.questionPage}>
      <div className={styles.left}>
        <div className={styles.currentQuestion}></div>
        <div className={styles.questionNavigation}></div>
      </div>
      <div className={styles.right}></div>
    </div>
  );
};

export default QuestionPage;
