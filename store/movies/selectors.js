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

export function selectMovieComments(state) {
  return state.movies.comments;
}

export function selectSearchTitle(state) {
  return state.movies.title;
}
