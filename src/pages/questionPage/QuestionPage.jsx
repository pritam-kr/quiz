import React, { useEffect, useState } from "react";
import styles from "./QuestionPage.module.scss";
import { useNavigate, useParams } from "react-router";
import { useGetQuestions } from "../../customHooks";
import { useDispatch, useSelector } from "react-redux";
import { Options, QuestionPanel } from "../../components";
import { ACTIONS } from "../../redux/actions";
import { zeroBeforeTen } from "../../utils/zeroBeforeTen";

const QuestionPage = ({ timerId }) => {
  const { Id, category } = useParams();
  // eslint-disable-next-line no-unused-vars
  const response = useGetQuestions({ category: Id });
  const {
    questionList: { data, isError, isLoading },
  } = useSelector((state) => state.questionReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(null);

  useEffect(() => {
    setCurrentQuestion(data[currentQuestionNumber]);
  }, [currentQuestionNumber, data]);

  const prevHandler = () => {
    if (currentQuestionNumber > 0) setCurrentQuestionNumber((prev) => prev - 1);
  };

  const nextHandler = (questionNumber) => {
    dispatch({
      type: ACTIONS.GET_VISITED,
      payload: currentQuestionNumber + 2,
    });

    setCurrentQuestionNumber((prev) => prev + 1);
  };

  const findLeaderBoard = (data) => {
    if (!localStorage.getItem("board")) {
      localStorage.setItem(
        "board",
        JSON.stringify([data.filter((item) => item.isAttended.length)])
      );
    } else {
      localStorage.setItem(
        "board",
        JSON.stringify([
          ...JSON.parse(localStorage.getItem("board")),
          data.filter((item) => item.isAttended.length),
        ])
      );
    }
  };

  const submitHandler = (data) => {
    localStorage.setItem("results", JSON.stringify(data));
    findLeaderBoard(data);
    clearInterval(timerId);
    navigate("/report");
  };

  return (
    <div className={styles.questionPage}>
      <div className={styles.left}>
        {isLoading || !currentQuestion ? (
          "loading"
        ) : (
          <div className={styles.currentQuestion}>
            <h1 className={styles.label}>
              {" "}
              <span>Q {zeroBeforeTen(currentQuestionNumber + 1)}.</span>{" "}
              {currentQuestion?.question}
            </h1>

            <div className={styles.options}>
              {currentQuestion?.options.map((option, i) => (
                <Options option={option} currentQuestion={currentQuestion} />
              ))}
            </div>
          </div>
        )}

        <div className={styles.questionNavigation}>
          <button
            onClick={prevHandler}
            style={!Boolean(currentQuestionNumber) ? { cursor: "no-drop" } : {}}
            className={`${styles.btnPrev} ${
              !Boolean(currentQuestionNumber) ? styles.btnDisabled : ""
            }`}
            disabled={!Boolean(currentQuestionNumber)}
          >
            Prev
          </button>
          {currentQuestionNumber === data?.length - 1 ? (
            <button onClick={() => submitHandler(data)}>Submit</button>
          ) : (
            <button onClick={() => nextHandler(currentQuestionNumber + 1)}>
              Next
            </button>
          )}
        </div>
      </div>
      <div className={styles.right}>
        <QuestionPanel questionNumber={currentQuestionNumber + 1} />
      </div>
    </div>
  );
};

export default QuestionPage;
