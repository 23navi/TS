import axios from "axios";
import { ActionTypes } from "../action-types/repo.types";
import { IAction } from "../actions";
import type { Dispatch } from "redux";

export const searchRepos = (term: string) => {
  return async (dispatch: Dispatch<IAction>) => {
    dispatch({
      type: ActionTypes.search_repo_loading,
    });

    try {
      const { data } = await axios.get(
        "https://registry.npmjs.org/-/v1/search",
        {
          params: {
            text: term,
          },
        }
      );
      dispatch({
        type: ActionTypes.search_repo_success,
        payload: data.objects.map((result: any) => result.package.name),
      });
    } catch (err) {
      if (err instanceof Error) {
        dispatch({
          type: ActionTypes.search_repo_error,
          payload: err.message,
        });
      }
    }
  };
};
