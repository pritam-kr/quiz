import React from "react";
import styles from "./QuestionsPanel.module.scss";
import { useSelector } from "react-redux";
import * as FaIcons from "react-icons/fa";

const QuestionPanel = ({ questionNumber }) => {
  const {
    questionList: { data, isError, isLoading },
  } = useSelector((state) => state.questionReducer);

  return (
    <div className={styles.panelWrapper}>
      {isLoading ? (
        "loding"
      ) : (
        <div className={styles.panel}>
          <div className={styles.pannelHeader}>
            <h1>
              Question{" "}
              {questionNumber < 10 ? `0${questionNumber}` : questionNumber} /{" "}
              {data?.length}
            </h1>
          </div>

          <div className={styles.panelCircle}>
            {data?.map((item, i) => (
              <div
                className={`${styles.circle} ${
                  item.isVisited ? styles.isVisited : ""
                }`}
              >
                {" "}
                {i + 1}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default QuestionPanel;
