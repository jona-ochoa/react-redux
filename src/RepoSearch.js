import React from "react";
import { connect } from "react-redux";
import "./App.css";
import Api from "./Api";

function RepoSearch(props) {
  return (
    <div className="App">
      <h1 className="title">Repo Search</h1>
      <form onSubmit={(evt) => props.handleSubmit(evt, props.inputValue)}>
        <input
          className="input"
          value={props.inputValue}
          onChange={props.handleInputChange}
          placeholder="Search ..."
        />
      </form>

      <ul className="ul">
        {props.repos.map((repo) => {
          return (
            <li className="li" key={repo.id}>
              <a href={repo.html_url} target="_blank" rel="noreferrer">
                {repo.name}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    inputValue: state.searchInputValue,
    repos: state.repos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputChange: (evt) => {
      dispatch({ type: "SEARCH_INPUT_CHANGE", value: evt.target.value });
    },

    handleSubmit: (evt, query) => {
      evt.preventDefault();
      // Api.getRepos(dispatch, query)
      Api.getReposAxios(dispatch, query);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RepoSearch);
