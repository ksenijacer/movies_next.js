import { put, call, takeLatest, select } from "redux-saga/effects";
import {
  getMovie,
  getMovies,
  setMovie,
  setMovies,
  createMovie,
  setNewMoviesList,
  appendMovies,
  getGenres,
  setGenres,
  setCurrentPage,
  setNewComment,
  getComment,
  setComment,
  addComment,
  setSearchTitle,
} from "./slice";
import movieService from "../../services/MovieService";

function* handleGetMovies({ payload }) {
  try {
    const response = yield call(movieService.getMovies, payload);
    if (response) {
      if (payload > 1) {
        yield put(setCurrentPage(response.current_page));
        yield put(appendMovies(response.data));
      } else {
        yield put(setCurrentPage(payload));
        yield put(setMovies(response.data));
      }
    }
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

function* handleGetGenres(action) {
  try {
    const genres = yield call(movieService.getGenres, action.payload);
    yield put(setGenres(genres));
  } catch (error) {
    alert(error.message);
  }
}

function* handleMovieComment({ payload }) {
  try {
    const data = yield call(
      movieService.addComment,
      payload.id,
      payload.content
    );
    yield put(setNewComment([data]));
  } catch (error) {
    console.log(error.message);
  }
}

function* handleCommentsGet(action) {
  try {
    const data = yield call(movieService.getComment, action.payload);
    yield put(setComment(data));
    yield;
  } catch (error) {
    console.log(error.message);
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

export function* watchgetGenres() {
  yield takeLatest(getGenres.type, handleGetGenres);
}

export function* watchMovieComment() {
  yield takeLatest(addComment.type, handleMovieComment);
}

export function* watchCommentGet() {
  yield takeLatest(getComment.type, handleCommentsGet);
}
