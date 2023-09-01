import React from "react";
import styles from "./Options.module.scss";
import { useDispatch } from "react-redux";
import { ACTIONS } from "../../redux/actions";
import * as FaIcons from "react-icons/fa";

const Options = ({ option, currentQuestion }) => {
  const dispatch = useDispatch();

  return (
    <p
      onClick={() => {
        dispatch({
          type: ACTIONS.GET_ATTENDED,
          payload: { questionId: currentQuestion.id, option: option },
        });
      }}
      className={styles.options}
      style={
        currentQuestion.isAttended.includes(option)
          ? { fontWeight: "700", color: "#0e72c9" }
          : { color: "" }
      }
    >
      <FaIcons.FaCircle
        className={styles.bullet}
        style={
          currentQuestion.isAttended.includes(option)
            ? { color: "#0e72c9" }
            : { color: "" }
        }
      />
      {option}
    </p>
  );
};

export default Options;
