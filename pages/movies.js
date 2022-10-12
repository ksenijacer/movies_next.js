import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getMovies,
  selectCurrentPage,
  selectMovies,
  selectSearchTitle,
} from "../store/movies";
import MovieRow from "../components/MovieRow";
import styles from "../styles/App.module.css";
import MovieSearch from "../components/MovieSearch";

export default function Movies() {
  const dispatch = useDispatch();
  const movies = useSelector(selectMovies);
  const current_page = useSelector(selectCurrentPage);
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(getMovies({ page: current_page }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (search != "") dispatch(getMovies({ search }));
  }, [search, dispatch]);

  function handleLoadMore() {
    dispatch(getMovies({ page: current_page + 1 }));
  }

  return (
    <div>
      <h3 className={styles.h2}>Movies</h3>
      <MovieSearch search={search} setSearch={setSearch} />
      {movies?.length ? (
        <div>
          <ul className="card-group mt-2">
            {movies.map((movie) => (
              <MovieRow key={movie.id} movie={movie} />
            ))}
          </ul>
          <div className={styles.divButton}>
            <button
              type="button"
              className="btn btn-primary mb-2"
              //disabled={current_page >= movies?.last_page}
              onClick={handleLoadMore}
            >
              Load more
            </button>
          </div>
        </div>
      ) : (
        <div> Could not load movies. </div>
      )}
    </div>
  );
}
