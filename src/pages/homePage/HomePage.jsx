import React from "react";
import styles from "./Home.module.scss";
import { QUESTION_CATEGORY } from "./constants";
import { useNavigate } from "react-router";

const HomePage = () => {
  const navigate = useNavigate();

  const quizHandler = ({ name, value }) => {
    navigate(`/question/${value}/${name}`);
  };

  console.log(
    JSON.parse(localStorage.getItem("board"))?.map(
      (item) =>
        item?.map((board) => ({
          attended: item.length,
          category: board.category,
          type: board.type,
        }))[0]
    ),
    "lklkl"
  );

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

      {/* <div className={styles.history}>
        <div className={styles.pageHeader}>
          <h1 className={styles.title}>Playing history</h1>
        </div>

        <div className={styles.boardWrapper}>
          {!JSON.parse(localStorage.getItem("board"))
            ?.map(
              (item) =>
                item?.map((board) => ({
                  attended: item.length,
                  category: board.category,
                  type: board.type,
                }))[0]
            )
            ?.filter((item) =>  item)?.length ? (
            <p>You have not attended any Quiz</p>
          ) : (
            JSON.parse(localStorage.getItem("board"))
              ?.map(
                (item) =>
                  item?.map((board) => ({
                    attended: item.length,
                    category: board.category,
                    type: board.type,
                  }))[0]
              )
              ?.filter((item) =>  item)
              ?.map((item) => (
                <div className={styles.board}>
                  <li>
                    <span>Question attended </span>: {item?.attended ?? 0}
                  </li>
                  <li>
                    <span>Category</span> : {item?.category ?? ""}
                  </li>
                  <li>
                    <span>Question Type</span>: {item?.type ?? ""}{" "}
                  </li>
                </div>
              ))
          )}
        </div>
      </div> */}
    </div>
  );
};

export default HomePage;
