import axios from "axios";
import { useDispatch } from "react-redux";
import { ACTIONS } from "../redux/actions";
import { useEffect } from "react";

const useGetQuestions = ({
  noOfQuestion = 15,
  category = 23,
  type = "multiple",
  dependecies = [],
}) => {
  const dispatch = useDispatch();

  const getQuestionList = async () => {
    try {
      dispatch({
        type: ACTIONS.GET_QUESTIONS,
        payload: { data: [], isError: "", isLoading: true },
      });

      const {
        data: { results },
        status,
      } = await axios.get(
        `https://opentdb.com/api.php?amount=${noOfQuestion}&category=${category}&type=${type}`
      );

      if (status === 200)
        dispatch({
          type: ACTIONS.GET_QUESTIONS,
          payload: {
            data: results?.map((question) => ({
              ...question,
              options: [question.correct_answer, ...question.incorrect_answers],
            })),
            isError: "",
            isLoading: false,
          },
        });
    } catch (error) {
      dispatch({
        type: ACTIONS.GET_QUESTIONS,
        payload: {
          data: [],
          isError:
            error.message ??
            "Something went wrong, Please try after some time.",
          isLoading: false,
        },
      });
    }
  };

  useEffect(() => {
    getQuestionList();
  }, []);
};

export default useGetQuestions;
