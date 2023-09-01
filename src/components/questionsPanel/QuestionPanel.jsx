import React, { useState } from "react";
import styles from "./QuestionsPanel.module.scss";
import { useSelector } from "react-redux";
import * as FaIcons from "react-icons/fa";
import { CIRCLE_INFO } from "./constants";
import { useLocation } from "react-router";

const QuestionPanel = ({ questionNumber }) => {
  const {
    questionList: { data, isError, isLoading },
  } = useSelector((state) => state.questionReducer);

  const { pathname } = useLocation();

  console.log(pathname, "footer");

  let questionData;
  questionData = data?.length
    ? data
    : JSON.parse(localStorage.getItem("results"));

  return (
    <div className={styles.panelWrapper}>
      {isLoading ? (
        "loding"
      ) : (
        <div className={styles.panel}>
          <div className={styles.pannelHeader}>
            {!questionNumber ? (
              <h1>Total score: </h1>
            ) : (
              <h1>
                Question{" "}
                {questionNumber < 10 ? `0${questionNumber}` : questionNumber} /{" "}
                {data?.length}
              </h1>
            )}
          </div>

          <div className={styles.panelCircle}>
            {questionData?.map((item, i) => (
              <div
                style={
                  pathname === "/report" &&
                  item.correct_answer === item.isAttended?.join()
                    ? { backgroundColor: "#0e800e", color: "#fff" }
                    :  item.isAttended.length > 0
                    ? { backgroundColor: "#0e72c9", color: "#fff" }
                    : { backgroundColor: "" }
                }
                className={`${styles.circle} ${
                  item.isVisited ? styles.isVisited : ""
                }`}
              >
                {" "}
                {i + 1}
              </div>
            ))}
          </div>

          <div className={styles.circleDetails}>
            {CIRCLE_INFO?.map((item) => (
              <p>
                {" "}
                <FaIcons.FaCircle style={{ color: item.color }} /> {item.type}{" "}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default QuestionPanel;
