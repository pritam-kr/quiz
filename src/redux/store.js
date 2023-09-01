import { questionReducer } from "./reducers";
import { combineReducers, createStore } from "redux";

const reducers = combineReducers({ questionReducer });
export const store = createStore(reducers);
