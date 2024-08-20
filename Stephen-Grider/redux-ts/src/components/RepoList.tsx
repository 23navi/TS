import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useState } from "react";
const RepoList = () => {
  const { searchRepos } = useActions();
  const { data, error, loading } = useTypedSelector((state) => state.repos);
  const [searchTerm, setSearchTerm] = useState("");
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchRepos(searchTerm);

    setSearchTerm("");
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          onChange={(event) => setSearchTerm(event.target.value)}
          value={searchTerm}
        ></input>
        <button>Search</button>
      </form>
      <div>
        {error && <h3>Error loading the repos</h3>}{" "}
        {loading && <h3>Loading</h3>}
      </div>
      <div>
        {!error && !loading && data.map((repo) => <div key={repo}>{repo}</div>)}
      </div>
    </div>
  );
};

export default RepoList;
