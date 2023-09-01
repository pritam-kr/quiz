import React from "react";
import styles from "./ReportPage.module.scss";
import { QuestionPanel } from "../../components";

const ReportPage = () => {
  const questionData = JSON.parse(localStorage.getItem("results"));

  return (
    <div className={styles.report}>
      <div className={styles.left}>
        {questionData?.map((item, i) => (
          <div className={styles.question}>
            <h1>
              {" "}
              <span>Q{i + 1}. </span> {item.question}
            </h1>
            <div className={styles.footer}>
              <p>
                <span>Correct Answer</span>: {item.correct_answer}
              </p>{" "}
              <p>
                <span>Selected option</span>:{" "}
                {item.isAttended?.length
                  ? item.isAttended?.join()
                  : ""}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.right}>
        <QuestionPanel />
      </div>
    </div>
  );
};

export default ReportPage;