import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies, selectMovies } from "../store/movies";
import MovieRow from "../components/MovieRow";
import styles from "../styles/App.module.css";

export default function Movies() {
  const dispatch = useDispatch();
  const movies = useSelector(selectMovies);

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  return (
    <div>
      <h3 className={styles.h2}>Movies</h3>
      {movies.length ? (
        <div>
          <ul className="card-group mt-2">
            {movies.map((movie) => (
              <MovieRow key={movie.id} movie={movie} />
            ))}
          </ul>
        </div>
      ) : (
        <div> Could not load movies. </div>
      )}
    </div>
  );
}
