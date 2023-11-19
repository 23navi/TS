interface IRepoState {
  data: string[];
  error: null | string;
  loading: boolean;
}
const reducer = (state: IRepoState, action: any): IRepoState => {
  switch (action.types) {
    case "action_type_name success":
      return { loading: false, error: null, data: action.payload };
    case "action_type_name error":
      return { loading: false, error: "error", data: [] };

    case "action_type_name loading":
      return { loading: true, error: null, data: [] };
    default:
      return state;
  }
};
export default reducer;
