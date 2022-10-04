import { put, call, takeLatest } from "redux-saga/effects";
import {
  getMovie,
  getMovies,
  setMovie,
  setMovies,
  createMovie,
  setCreateErrors,
  setNewMoviesList,
} from "./slice";
import movieService from "../../services/MovieService";
import Router from "next/router";

function* handleGetMovies({ payload }) {
  try {
    const movies = yield call(movieService.getMovies, payload);
    yield put(setMovies(movies));
    console.log(movies);
  } catch (error) {
    alert(error.message);
  }
}

function* handleGetMovie({ payload }) {
  try {
    const movie = yield call(movieService.getMovie, payload);
    yield put(setMovie(movie));
  } catch (error) {
    alert(error.message);
  }
}

function* handleCreateMovie(action) {
  try {
    const newMovie = yield call(movieService.createMovie, action.payload);
    yield put(setNewMoviesList(newMovie));
  } catch (error) {
    alert(error.message);
  }
}

export function* watchGetMovies() {
  yield takeLatest(getMovies.type, handleGetMovies);
}

export function* watchGetMovie() {
  yield takeLatest(getMovie.type, handleGetMovie);
}

export function* watchCreateMovie() {
  yield takeLatest(createMovie.type, handleCreateMovie);
}
