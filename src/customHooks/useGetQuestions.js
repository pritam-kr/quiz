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

      

    } catch (error) {
      dispatch({
        type: ACTIONS.GET_QUESTIONS,
        payload: {
          data: [],
          isError:
            error.message ??
            "Something went wrong, Please try after some time.",
          isLoading: true,
        },
      });
    }
  };

  useEffect(() => {
    getQuestionList();
  }, [category]);
};

export default useGetQuestions;
