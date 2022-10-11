import React, { useEffect } from "react";
import { DebounceInput } from "react-debounce-input";
import styles from "../styles/App.module.css";
import { useDispatch } from "react-redux";
import { getMovies } from "../store/movies";

function MovieSearch({ search, setSearch }) {
  return (
    <div className={styles.searchDiv}>
      Search:
      <DebounceInput
        type="text"
        name="search"
        value={search.title}
        placeholder="Search movies"
        debounceTimeout={750}
        onChange={({ target }) => setSearch(target.value)}
      />
    </div>
  );
}

export default MovieSearch;
