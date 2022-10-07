import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getGenres, createMovie } from "../store/movies/slice";
import { selectMovieGenres } from "../store/movies";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { useFormik } from "formik";
import createMovieSchema from "../validation/createMovieValidation";
import styles from "../styles/App.module.css";

const CreateMovie = () => {
  const dispatch = useDispatch();
  const genres = useSelector(selectMovieGenres);

  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      image_url: "",
      genres: [],
    },
    validationSchema: createMovieSchema,
    onSubmit: (values) => {
      dispatch(createMovie(values));
    },
  });

  const renderOptions = () => {
    const defaultOption = [
      <option key="Any" value="">
        Any genre
      </option>,
    ];
    return defaultOption.concat(
      genres.map((genre, index) => {
        return (
          <option key={index} value={genre.type}>
            {genre.type}
          </option>
        );
      })
    );
  };

  return (
    <div>
      <h2 className={styles.h2}>Create a movie</h2>
      <Container>
        <div>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Group className="col-4 offset-4 mb-3">
              <Form.Label>Movie title</Form.Label>
              <Form.Control
                id="title"
                name="title"
                type="text"
                placeholder="Enter movie title"
                value={formik.values.title}
                onChange={formik.handleChange}
              />
              {formik.touched.title && formik.errors.title && (
                <small className="form-text text-danger">
                  {formik.errors.title}
                </small>
              )}
            </Form.Group>
            <Form.Group className="col-4 offset-4 mb-3">
              <Form.Label>Movie description</Form.Label>
              <Form.Control
                id="description"
                name="description"
                as="textarea"
                rows={3}
                placeholder="Enter movie description"
                value={formik.values.description}
                onChange={formik.handleChange}
              />
              {formik.touched.description && formik.errors.description && (
                <small className="form-text text-danger">
                  {formik.errors.description}
                </small>
              )}
            </Form.Group>
            <Form.Group className="col-4 offset-4 mb-3">
              <Form.Label>Cover</Form.Label>
              <Form.Control
                id="image_url"
                name="image_url"
                type="text"
                placeholder="Cover image link"
                value={formik.values.cover_image_url}
                onChange={formik.handleChange}
              />
              {formik.touched.cover_image_url &&
                formik.errors.cover_image_url && (
                  <small className="form-text text-danger">
                    {formik.errors.cover_image_url}
                  </small>
                )}
            </Form.Group>
            <Form.Group className="col-4 offset-4 mb-3">
              <Form.Label>Genre</Form.Label>
              <Form.Select
                id="genre"
                name="genres"
                className="shadow-none"
                multiple
                value={formik.values.genres}
                onChange={formik.handleChange}
              >
                {renderOptions()}
              </Form.Select>
              {formik.touched.genre && formik.errors.genre && (
                <small className="form-text text-danger">
                  {formik.errors.genre}
                </small>
              )}
            </Form.Group>
            <div className={styles.divButton}>
              <Button variant="success" type="submit">
                Create
              </Button>
            </div>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default CreateMovie;
