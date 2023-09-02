import React from "react";
import styles from "./ReportPage.module.scss";
import { QuestionPanel } from "../../components";
import { zeroBeforeTen } from "../../utils/zeroBeforeTen";
import { useNavigate } from "react-router-dom";

const ReportPage = () => {
  const questionData = JSON.parse(localStorage.getItem("results"));
  const navigate = useNavigate();

  return (
    <div className={styles.report}>
      <div className={styles.left}>
        {questionData?.map((item, i) => (
          <div
            className={styles.question}
            style={
              item.correct_answer === item.isAttended?.join()
                ? { backgroundColor: "rgb(87 197 87 / 49%)" }
                : {}
            }
          >
            <h1>
              {" "}
              <span>Q {zeroBeforeTen(i + 1)}. </span> {item.question}
            </h1>
            <div className={styles.footer}>
              <p>
                <span>Correct Answer</span>: {item.correct_answer}
              </p>{" "}
              <p>
                <span>Selected option</span>:{" "}
                {item.isAttended?.length ? item.isAttended?.join() : ""}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.right}>
        <QuestionPanel />

        <button onClick={() => navigate("/home")}>Go back to Home</button>
      </div>
    </div>
  );
};

export default ReportPage;
