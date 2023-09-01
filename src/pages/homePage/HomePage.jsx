import React from "react";
import styles from "./Home.module.scss";
import { QUESTION_CATEGORY } from "./constants";

const HomePage = () => {
  return (
    <div className={styles.home}>
      <div className={styles.pageHeader}>
        <h1 className={styles.title}>Quizzes</h1>
      </div>

      <div className={styles.quizzes}>
        {QUESTION_CATEGORY.map((category) => (
          <div className={styles.categoryCard}>
            <img
              src={category.thumbnail}
              alt={category.name}
              className={styles.categoryThumbnail}
            />
            <h1 className={styles.quizLabel}>{category.label}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
