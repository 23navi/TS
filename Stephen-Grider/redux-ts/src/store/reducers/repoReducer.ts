interface IRepoState {
  data: string[];
  error: null | string;
  loading: boolean;
}

enum ActionTypes {
  search_repo_loading,
  search_repo_success,
  search_repo_error,
}

interface ISearchRepo {
  type: ActionTypes.search_repo_loading;
}

interface ISearchRepoSuccess {
  type: ActionTypes.search_repo_success;
  payload: string[];
}

interface ISearchRepoError {
  type: ActionTypes.search_repo_error;
  payload: string;
}

type IAction = ISearchRepo | ISearchRepoSuccess | ISearchRepoError;

const reducer = (state: IRepoState, action: IAction): IRepoState => {
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
