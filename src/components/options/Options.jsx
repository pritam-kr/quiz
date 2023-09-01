import React, { useEffect, useState } from "react";
import styles from "./Options.module.scss";
import { useDispatch } from "react-redux";
import { ACTIONS } from "../../redux/actions";
import * as FaIcons from "react-icons/fa";

const Options = ({ option, currentQuestion }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("RR")
    if (selectedOption) {
        console.log("pp")
      dispatch({
        type: ACTIONS.GET_ATTENDE,
        payload: { questionId: currentQuestion.id, selectedOption },
      });
    }
  }, [selectedOption]);
 

  return (
    <p
      onClick={() => setSelectedOption(option)}
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
