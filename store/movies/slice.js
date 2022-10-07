import { createSlice, current } from "@reduxjs/toolkit";

const middlewareActions = {
  getMovies() {},
  getMovie() {},
  createMovie() {},
  getGenres: () => {},
};

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movie: null,
    movies: [],
    genres: [],
    current_page: 1,
  },
  reducers: {
    setMovies(state, action) {
      state.movies = action.payload;
    },
    setMovie(state, action) {
      state.movie = action.payload;
    },
    setNewMoviesList(state, action) {
      state.movies = [...state.movies, action.payload];
    },
    appendMovies(state, { payload }) {
      state.movies = [...state.movies, ...payload];
    },
    setCurrentPage(state, action) {
      state.current_page = action.payload;
    },
    setGenres(state, action) {
      state.genres = action.payload;
    },

    ...middlewareActions,
  },
});

export const {
  getMovie,
  getMovies,
  setMovie,
  setMovies,
  createMovie,
  appendMovies,
  setCurrentPage,
  setNewMoviesList,
  getGenres,
  setGenres,
} = moviesSlice.actions;

export default moviesSlice.reducer;
