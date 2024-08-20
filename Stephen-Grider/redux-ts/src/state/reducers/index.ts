import { combineReducers } from "redux";
import reposReducer from "./repoReducer";

const reducers = combineReducers({
  repos: reposReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>
