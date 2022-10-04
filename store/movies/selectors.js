export function selectMovies(state) {
    return state.movies.movies;
};

export function selectMovie(state) {
    return state.movies.movie;
}

export function selectCreateErrors(state) {
    return state.movies.createErrors;
}