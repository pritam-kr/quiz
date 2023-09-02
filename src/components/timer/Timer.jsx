import React, { useEffect, useState } from "react";
import styles from "./Timer.module.scss";
import { zeroBeforeTen } from "../../utils/zeroBeforeTen";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const Timer = ({ timerId, setTimerId }) => {
  const [time, setTime] = useState({ min: null, sec: null });
  const [timerStart, setTimerStart] = useState(true);

  const {
    questionList: { data, isError, isLoading },
  } = useSelector((state) => state.questionReducer);

  const navigate = useNavigate();

  useEffect(() => {
    let second = 60;
    let minitue = 30;
    let timerId;
    if (timerStart && minitue > 1) minitue = minitue - 1;
    timerId = setInterval(() => {
      second = second - 1;

      // if (minitue === 1 || minitue < 0) {
      //   minitue = 0;
      // }

      // if (second === 0) {
      //   second = 60;
      //   minitue = minitue - 1;
      // }

      if (minitue === 1) {
        minitue = 0;
      } else if (minitue > 1) {
        if (second === 1) {
          second = 60;
          minitue = minitue - 1;
        }
      }

      if (minitue === 0 && second === 1) {
        console.log(second, minitue);
        clearInterval(timerId);
        setTimerStart(false);
        localStorage.setItem("results", JSON.stringify(data));
        navigate("/report");
      }

      setTime((prev) => ({ ...prev, sec: second, min: minitue }));
    }, 1000);

    setTimerId(timerId);
    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div className={styles.timer}>
      <h1>
        <span>{time.min === 0 ? "00" : zeroBeforeTen(time.min)}</span> :{" "}
        <span>{time.sec === 0 ? "00" : zeroBeforeTen(time.sec)}</span>{" "}
      </h1>
    </div>
  );
};

export default Timer;
