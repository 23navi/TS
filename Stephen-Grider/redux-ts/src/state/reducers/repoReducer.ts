import { ActionTypes } from "../action-types";
import { IAction } from "../actions";

interface IRepoState {
  data: string[];
  error: null | string;
  loading: boolean;
}

const initialState: IRepoState = {
  data: [],
  error: null,
  loading: false,
};

const reducer = (
  state: IRepoState = initialState,
  action: IAction
): IRepoState => {
  switch (action.type) {
    case ActionTypes.search_repo_success:
      return { loading: false, error: null, data: action.payload };
    case ActionTypes.search_repo_error:
      return { loading: false, error: "error", data: [] };
    case ActionTypes.search_repo_loading:
      return { loading: true, error: null, data: [] };
    default:
      return state;
  }
};
export default reducer;
