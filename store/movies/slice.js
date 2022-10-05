import { createSlice } from "@reduxjs/toolkit";
import { STATIC_STATUS_PAGES } from "next/dist/shared/lib/constants";

const middlewareActions = {
  getMovies() {},
  getMovie() {},
  createMovie() {},
};

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movie: null,
    movies: [],
    createErrors: null,
  },
  reducers: {
    setMovies(state, action) {
      state.movies = action.payload;
    },

    setMovie(state, action) {
      state.movie = action.payload;
    },
    setCreateErrors(state, { payload }) {
      state.createErrors = payload;
    },
    setNewMoviesList(state, action) {
      state.movies = [...state.movies, action.payload];
    },

    ...middlewareActions,
  },
});

export const {
  getMovie,
  getMovies,
  setMovie,
  setMovies,
  setCreateErrors,
  createMovie,
} = moviesSlice.actions;

export default moviesSlice.reducer;
