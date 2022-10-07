export function selectMovies(state) {
  return state.movies.movies;
}

export function selectMovie(state) {
  return state.movies.movie;
}

export function selectMovieGenres(state) {
  return state.movies.genres;
}

export function selectCurrentPage(state) {
  return state.movies.current_page;
}
