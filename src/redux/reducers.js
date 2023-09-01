import { ACTIONS } from "./actions";

const initialState = {
  questionList: { data: [], isError: "", isLoading: "" },
};

export const questionReducer = ({ state = initialState, action }) => {
  switch (action.type) {
    case ACTIONS.GET_QUESTIONS:
      return { ...state, questionList: action.payload };

    default:
      return state;
  }
};
