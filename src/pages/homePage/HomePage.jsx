import React from "react";
import styles from "./Home.module.scss";
import { QUESTION_CATEGORY } from "./constants";
import { useNavigate } from "react-router";

const HomePage = () => {
  const navigate = useNavigate();

  const quizHandler = ({ name, value }) => {
    navigate(`/question/${value}/${name}`);
  };

  return (
    <div className={styles.home}>
      <div className={styles.pageHeader}>
        <h1 className={styles.title}>Quizzes</h1>
      </div>

      <div className={styles.quizzes}>
        {QUESTION_CATEGORY.map((category) => (
          <div
            className={styles.categoryCard}
            onClick={() =>
              quizHandler({ name: category.name, value: category.value })
            }
          >
            <img
              src={category.thumbnail}
              alt={category.name}
              className={styles.categoryThumbnail}
            />
            <h1 className={styles.quizLabel}>{category.label}</h1>
          </div>
        ))}
      </div>

      <div className={styles.history}>
        <div className={styles.pageHeader}>
          <h1 className={styles.title}>Game History</h1>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
