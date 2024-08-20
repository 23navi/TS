import { combineReducers } from "redux";
import reposReducer from "./repoReducer";

const reducers = combineReducers({
  repos: reposReducer,
});

export default reducers;
