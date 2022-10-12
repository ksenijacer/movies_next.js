import { createSlice, current } from "@reduxjs/toolkit";

const middlewareActions = {
  getMovies() {},
  getMovie() {},
  createMovie() {},
  getGenres() {},
  getComment() {},
  addComment() {},
};

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movie: null,
    movies: [],
    genres: [],
    current_page: 1,
    title: null,
    comments: [],
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
    setComment(state, action) {
      state.comments = action.payload;
    },
    setNewComment(state, { payload }) {
      state.comments = [...state.comments, ...payload];
    },
    setSearchTitle(state, action) {
      state.title = action.payload;
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
  getComment,
  setGenres,
  setComment,
  setNewComment,
  addComment,
  setSearchTitle,
} = moviesSlice.actions;

export default moviesSlice.reducer;
