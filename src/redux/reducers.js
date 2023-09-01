import { ACTIONS } from "./actions";

const initialState = {
  questionList: { data: [], isError: "", isLoading: "" },
};

export const questionReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.GET_QUESTIONS:
      return { ...state, questionList: { ...action.payload } };

    case ACTIONS.GET_VISITED:
      return {
        ...state,
        questionList: {
          ...state.questionList,
          data: state.questionList.data.map((item) =>
            item.id === action.payload ? { ...item, isVisited: true } : item
          ),
        },
      };

    case ACTIONS.GET_ATTENDED:
      return {
        ...state,
        questionList: {
          ...state.questionList,
          data: state.questionList.data.map((item) =>
            item.id === action.payload.questionId
              ? {
                  ...item,
                  isAttended: item.isAttended.includes(action.payload.option)
                    ? []
                    : [action.payload.option],
                }
              : item
          ),
        },
      };

    default:
      return state;
  }
};
