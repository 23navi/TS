import { ActionTypes } from "../action-types";

export interface ISearchRepo {
  type: ActionTypes.search_repo_loading;
}

export interface ISearchRepoSuccess {
  type: ActionTypes.search_repo_success;
  payload: string[];
}

export interface ISearchRepoError {
  type: ActionTypes.search_repo_error;
  payload: string;
}

export type IAction = ISearchRepo | ISearchRepoSuccess | ISearchRepoError;
